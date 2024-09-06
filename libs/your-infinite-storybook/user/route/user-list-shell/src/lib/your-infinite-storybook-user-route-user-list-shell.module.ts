import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    UserListPageComponent,
    YourInfiniteStorybookUserRouteUserListPageModule
} from '@your-infinite-storybook/your-infinite-storybook/user/route/user-list-page';

@NgModule({
    imports: [
        CommonModule,
        YourInfiniteStorybookUserRouteUserListPageModule,
        RouterModule.forChild([
            {
                path: '',
                component: UserListPageComponent,
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
                                        '@your-infinite-storybook/your-infinite-storybook/user/route/user-list-item-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookUserRouteUserListItemPageModule
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
export class YourInfiniteStorybookUserRouteUserListShellModule {}
