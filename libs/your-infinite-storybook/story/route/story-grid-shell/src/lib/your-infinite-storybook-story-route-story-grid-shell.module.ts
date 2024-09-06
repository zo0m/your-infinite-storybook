import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    StoryGridPageComponent,
    YourInfiniteStorybookStoryRouteStoryGridPageModule
} from '@your-infinite-storybook/your-infinite-storybook/story/route/story-grid-page';

@NgModule({
    imports: [
        CommonModule,
        YourInfiniteStorybookStoryRouteStoryGridPageModule,
        RouterModule.forChild([
            {
                path: '',
                component: StoryGridPageComponent,
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
                                        '@your-infinite-storybook/your-infinite-storybook/story/route/story-grid-item-page'
                                    ).then(
                                        (module) =>
                                            module.YourInfiniteStorybookStoryRouteStoryGridItemPageModule
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
export class YourInfiniteStorybookStoryRouteStoryGridShellModule {}
