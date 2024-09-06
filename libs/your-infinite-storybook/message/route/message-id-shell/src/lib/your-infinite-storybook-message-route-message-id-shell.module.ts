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
                                        '@your-infinite-storybook/your-infinite-storybook/message/route/message-card-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookMessageRouteMessageCardPageModule
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
export class YourInfiniteStorybookMessageRouteMessageIdShellModule {}
