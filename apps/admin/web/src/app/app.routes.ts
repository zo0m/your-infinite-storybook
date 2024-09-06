import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        loadChildren: () =>
            import(
                '@your-infinite-storybook/your-infinite-storybook/user/route/user-shell'
                ).then(
                (module) => module.YourInfiniteStorybookUserRouteUserShellModule
            )
    },
    {
        path: 'stories',
        loadChildren: () =>
            import(
                '@your-infinite-storybook/your-infinite-storybook/story/route/story-shell'
                ).then(
                (module) => module.YourInfiniteStorybookStoryRouteStoryShellModule
            )
    },
    {
        path: 'messages',
        loadChildren: () =>
            import(
                '@your-infinite-storybook/your-infinite-storybook/message/route/message-shell'
                ).then(
                (module) => module.YourInfiniteStorybookMessageRouteMessageShellModule
            )
    }
];
