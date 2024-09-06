import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    MessageGridPageComponent,
    YourInfiniteStorybookMessageRouteMessageGridPageModule
} from '@your-infinite-storybook/your-infinite-storybook/message/route/message-grid-page';

@NgModule({
    imports: [
        CommonModule,
        YourInfiniteStorybookMessageRouteMessageGridPageModule,
        RouterModule.forChild([
            {
                path: '',
                component: MessageGridPageComponent,
                children: [
                    {
                        path: 'create',
                        loadChildren: () =>
                            import(
                                '@your-infinite-storybook/your-infinite-storybook/message/route/message-create-page'
                            ).then(
                                (module) =>
                                    module.YourInfiniteStorybookMessageRouteMessageCreatePageModule
                            )
                    },
                    {
                        path: ':messageId',
                        children: [
                            {
                                path: '',
                                loadChildren: () =>
                                    import(
                                        '@your-infinite-storybook/your-infinite-storybook/message/route/message-grid-item-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookMessageRouteMessageGridItemPageModule
                                    )
                            },
                            {
                                path: 'edit',
                                loadChildren: () =>
                                    import(
                                        '@your-infinite-storybook/your-infinite-storybook/message/route/message-edit-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookMessageRouteMessageEditPageModule
                                    )
                            }
                        ]
                    }
                ]
            }
        ])
    ]
})
export class YourInfiniteStorybookMessageRouteMessageGridShellModule {}
