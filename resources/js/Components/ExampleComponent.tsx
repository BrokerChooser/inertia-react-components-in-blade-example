import React from 'react';


export const ExampleComponent: React.FC<{name: string}> = (props) => <div>Hello, {props.name} {typeof window === 'undefined' ? 'from server' : 'from client'}</div>;
