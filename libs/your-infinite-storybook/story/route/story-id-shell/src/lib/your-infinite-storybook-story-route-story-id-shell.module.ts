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
                                '@your-infinite-storybook/your-infinite-storybook/story/route/story-create-page'
                            ).then(
                                (module) =>
                                    module.YourInfiniteStorybookStoryRouteStoryCreatePageModule
                            )
                    },
                    {
                        path: ':storyId',
                        children: [
                            {
                                path: '',
                                loadChildren: () =>
                                    import(
                                        '@your-infinite-storybook/your-infinite-storybook/story/route/story-card-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookStoryRouteStoryCardPageModule
                                    )
                            },
                            {
                                path: 'edit',
                                loadChildren: () =>
                                    import(
                                        '@your-infinite-storybook/your-infinite-storybook/story/route/story-edit-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookStoryRouteStoryEditPageModule
                                    )
                            }
                        ]
                    }
                ]
            }
        ])
    ]
})
export class YourInfiniteStorybookStoryRouteStoryIdShellModule {}
