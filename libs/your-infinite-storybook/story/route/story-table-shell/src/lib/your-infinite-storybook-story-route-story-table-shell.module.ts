import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    StoryTablePageComponent,
    YourInfiniteStorybookStoryRouteStoryTablePageModule
} from '@your-infinite-storybook/your-infinite-storybook/story/route/story-table-page';

@NgModule({
    imports: [
        CommonModule,
        YourInfiniteStorybookStoryRouteStoryTablePageModule,
        RouterModule.forChild([
            {
                path: '',
                component: StoryTablePageComponent,
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
                                        '@your-infinite-storybook/your-infinite-storybook/story/route/story-table-item-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookStoryRouteStoryTableItemPageModule
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
export class YourInfiniteStorybookStoryRouteStoryTableShellModule {}
