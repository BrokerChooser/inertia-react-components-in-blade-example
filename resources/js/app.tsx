import './bootstrap';
import '../css/app.css';

import React from "react";
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { getComponent } from "@/GetComponent";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

document
    .querySelectorAll<HTMLElement>('[data-page]:not(#app)')
    .forEach(async (el) => {
        const { page } = el.dataset;

        if (!page) {
            return;
        }

        const inertiaPageObject = JSON.parse(page);

        const component = await getComponent(inertiaPageObject.component);

        createRoot(el).render(React.createElement(component, inertiaPageObject.props));
    });
