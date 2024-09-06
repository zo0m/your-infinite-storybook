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
                        '@your-infinite-storybook/your-infinite-storybook/user/route/user-index-page'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookUserRouteUserIndexPageModule
                    )
            },
            {
                path: 'table',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/user/route/user-table-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookUserRouteUserTableShellModule
                    )
            },
            {
                path: 'grid',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/user/route/user-grid-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookUserRouteUserGridShellModule
                    )
            },
            {
                path: 'list',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/user/route/user-list-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookUserRouteUserListShellModule
                    )
            },
            {
                path: '',
                loadChildren: () =>
                    import(
                        '@your-infinite-storybook/your-infinite-storybook/user/route/user-id-shell'
                    ).then(
                        (module) =>
                            module.YourInfiniteStorybookUserRouteUserIdShellModule
                    )
            }
        ])
    ]
})
export class YourInfiniteStorybookUserRouteUserShellModule {}
