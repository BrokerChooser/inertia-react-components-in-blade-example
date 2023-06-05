import ReactDOMServer from 'react-dom/server';
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import route from '../../vendor/tightenco/ziggy/dist/index.m';
import { getComponent } from "@/GetComponent";

const appName = 'Laravel';

createServer((page) => {
    const pages = import.meta.glob('./Pages/**/*.tsx');
    const isInertiaPage = `./Pages/${page.component}.tsx` in pages;

    return createInertiaApp({
            id: (isInertiaPage
                ? 'app'
                : 'reactComponentFromBlade') as unknown as undefined,
            page,
            render: ReactDOMServer.renderToString,
            title: (title) => `${title} - ${appName}`,
            resolve: (name) => isInertiaPage ?
                resolvePageComponent(`./Pages/${name}.tsx`, pages) :
                getComponent(name),
            setup: ({ App, props }) => {
                global.route = (name, params, absolute) =>
                    route(name, params, absolute, {
                        // @ts-expect-error
                        ...page.props.ziggy,
                        // @ts-expect-error
                        location: new URL(page.props.ziggy.location),
                    });

                return <App {...props} />;
            },
        });
    }
);
