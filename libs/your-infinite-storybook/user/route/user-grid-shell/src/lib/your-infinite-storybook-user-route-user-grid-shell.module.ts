import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    UserGridPageComponent,
    YourInfiniteStorybookUserRouteUserGridPageModule
} from '@your-infinite-storybook/your-infinite-storybook/user/route/user-grid-page';

@NgModule({
    imports: [
        CommonModule,
        YourInfiniteStorybookUserRouteUserGridPageModule,
        RouterModule.forChild([
            {
                path: '',
                component: UserGridPageComponent,
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
                                        '@your-infinite-storybook/your-infinite-storybook/user/route/user-grid-item-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookUserRouteUserGridItemPageModule
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
export class YourInfiniteStorybookUserRouteUserGridShellModule {}
