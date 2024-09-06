import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    MessageListPageComponent,
    YourInfiniteStorybookMessageRouteMessageListPageModule
} from '@your-infinite-storybook/your-infinite-storybook/message/route/message-list-page';

@NgModule({
    imports: [
        CommonModule,
        YourInfiniteStorybookMessageRouteMessageListPageModule,
        RouterModule.forChild([
            {
                path: '',
                component: MessageListPageComponent,
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
                                        '@your-infinite-storybook/your-infinite-storybook/message/route/message-list-item-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookMessageRouteMessageListItemPageModule
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
export class YourInfiniteStorybookMessageRouteMessageListShellModule {}
