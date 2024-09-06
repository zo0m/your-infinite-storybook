import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    UserTablePageComponent,
    YourInfiniteStorybookUserRouteUserTablePageModule
} from '@your-infinite-storybook/your-infinite-storybook/user/route/user-table-page';

@NgModule({
    imports: [
        CommonModule,
        YourInfiniteStorybookUserRouteUserTablePageModule,
        RouterModule.forChild([
            {
                path: '',
                component: UserTablePageComponent,
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
                                        '@your-infinite-storybook/your-infinite-storybook/user/route/user-table-item-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookUserRouteUserTableItemPageModule
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
export class YourInfiniteStorybookUserRouteUserTableShellModule {}
