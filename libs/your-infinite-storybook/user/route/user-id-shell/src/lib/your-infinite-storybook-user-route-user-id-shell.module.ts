import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                children: [
                    {
                        path: 'create',
                        loadChildren: () =>
                            import(
                                '@your-infinite-storybook/your-infinite-storybook/user/route/user-create-page'
                            ).then(
                                (module) =>
                                    module.YourInfiniteStorybookUserRouteUserCreatePageModule
                            )
                    },
                    {
                        path: ':userId',
                        children: [
                            {
                                path: '',
                                loadChildren: () =>
                                    import(
                                        '@your-infinite-storybook/your-infinite-storybook/user/route/user-card-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookUserRouteUserCardPageModule
                                    )
                            },
                            {
                                path: 'edit',
                                loadChildren: () =>
                                    import(
                                        '@your-infinite-storybook/your-infinite-storybook/user/route/user-edit-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookUserRouteUserEditPageModule
                                    )
                            }
                        ]
                    }
                ]
            }
        ])
    ]
})
export class YourInfiniteStorybookUserRouteUserIdShellModule {}
