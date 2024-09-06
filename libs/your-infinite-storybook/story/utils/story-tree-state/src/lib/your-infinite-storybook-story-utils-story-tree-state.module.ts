import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoryTreeStateService } from './story-tree-state/story-tree-state.service';

@NgModule({
    imports: [CommonModule],
    providers: [StoryTreeStateService]
})
export class YourInfiniteStorybookStoryUtilsStoryTreeStateModule {}
