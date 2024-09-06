import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoryTreeEditStateService } from './story-tree-edit-state/story-tree-edit-state.service';

@NgModule({
    imports: [CommonModule],
    providers: [StoryTreeEditStateService]
})
export class YourInfiniteStorybookStoryUtilsStoryTreeEditStateModule {}
