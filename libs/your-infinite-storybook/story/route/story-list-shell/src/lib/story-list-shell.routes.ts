import { Route } from '@angular/router';

import { StoryListPageComponent } from '@your-infinite-storybook/your-infinite-storybook/story/route/story-list-page';

export const yourInfiniteStorybookStoryRouteStoryListShellRoutes: Route[] = [
    {
        path: '',
        component: StoryListPageComponent,
        children: [
            {
                path: 'create',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/story/route/story-create-page'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookStoryRouteStoryCreatePageModule
                    )
            },
            {
                path: ':storyId',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import(
                                '@your-infinite-storybook/your-infinite-storybook/story/route/story-list-item-page'
                            ).then(
                                (module) =>
                                    module.YourInfiniteStorybookStoryRouteStoryListItemPageModule
                            )
                    },
                    {
                        path: 'messages',
                        loadChildren: () =>
                            import(
                                '@your-infinite-storybook/your-infinite-storybook/message/route/message-list-shell'
                            ).then(
                                (module) =>
                                    module.YourInfiniteStorybookMessageRouteMessageListShellModule
                            )
                    },
                    {
                        path: 'edit',
                        loadChildren: () =>
                            import(
                                '@your-infinite-storybook/your-infinite-storybook/story/route/story-edit-page'
                            ).then(
                                (module) =>
                                    module.YourInfiniteStorybookStoryRouteStoryEditPageModule
                            )
                    }
                ]
            }
        ]
    }
];
