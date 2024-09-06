import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    MessageTablePageComponent,
    YourInfiniteStorybookMessageRouteMessageTablePageModule
} from '@your-infinite-storybook/your-infinite-storybook/message/route/message-table-page';

@NgModule({
    imports: [
        CommonModule,
        YourInfiniteStorybookMessageRouteMessageTablePageModule,
        RouterModule.forChild([
            {
                path: '',
                component: MessageTablePageComponent,
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
                                        '@your-infinite-storybook/your-infinite-storybook/message/route/message-table-item-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookMessageRouteMessageTableItemPageModule
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
export class YourInfiniteStorybookMessageRouteMessageTableShellModule {}
