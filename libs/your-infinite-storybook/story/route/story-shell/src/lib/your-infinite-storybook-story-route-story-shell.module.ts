import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/story/route/story-index-page'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookStoryRouteStoryIndexPageModule
                    )
            },
            {
                path: 'table',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/story/route/story-table-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookStoryRouteStoryTableShellModule
                    )
            },
            {
                path: 'grid',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/story/route/story-grid-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookStoryRouteStoryGridShellModule
                    )
            },
            {
                path: 'list',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/story/route/story-list-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookStoryRouteStoryListShellModule
                    )
            },
            {
                path: '',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/story/route/story-id-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookStoryRouteStoryIdShellModule
                    )
            }
        ])
    ]
})
export class YourInfiniteStorybookStoryRouteStoryShellModule {}
