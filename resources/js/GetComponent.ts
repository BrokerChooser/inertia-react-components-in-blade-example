import React from "react";

export const getComponent = async (
    reactComponentName: string,
): Promise<React.FunctionComponent<any>> => {
    const simpleComponentMap: Record<
        string,
        () => Promise<React.FunctionComponent<any>>
    > = {
        ExampleComponent: () =>
            import(
                './Components/ExampleComponent'
            ).then((module) => module.ExampleComponent),
    };

    if (reactComponentName in simpleComponentMap) {
        return simpleComponentMap[reactComponentName]();
    }

    const modulePath = `./components/${reactComponentName}.tsx`;

    const components = import.meta.glob('./components/*.tsx', {
        eager: true,
    }) as Record<string, { default: React.FunctionComponent<any> }>;

    if (!(modulePath in components)) {
        return Promise.reject(
            new Error(`Component not found: ${reactComponentName}`),
        );
    }

    return components[modulePath].default;
};
