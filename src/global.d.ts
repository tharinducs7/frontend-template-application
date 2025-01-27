declare module '@edx/frontend-platform/react' {
    import React from 'react';

    export const AppProvider: React.FC<{ children?: React.ReactNode }>;
    export const ErrorPage: React.FC<{ message: string }>;
}

declare module '@edx/frontend-platform';
declare module '@edx/frontend-component-header';