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
                        '@your-infinite-storybook/your-infinite-storybook/message/route/message-index-page'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookMessageRouteMessageIndexPageModule
                    )
            },
            {
                path: 'table',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/message/route/message-table-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookMessageRouteMessageTableShellModule
                    )
            },
            {
                path: 'grid',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/message/route/message-grid-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookMessageRouteMessageGridShellModule
                    )
            },
            {
                path: 'list',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/message/route/message-list-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookMessageRouteMessageListShellModule
                    )
            },
            {
                path: '',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/message/route/message-id-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookMessageRouteMessageIdShellModule
                    )
            }
        ])
    ]
})
export class YourInfiniteStorybookMessageRouteMessageShellModule {}
