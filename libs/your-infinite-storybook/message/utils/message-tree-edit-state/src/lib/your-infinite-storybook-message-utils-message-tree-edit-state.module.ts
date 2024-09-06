import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessageTreeEditStateService } from './message-tree-edit-state/message-tree-edit-state.service';

@NgModule({
    imports: [CommonModule],
    providers: [MessageTreeEditStateService]
})
export class YourInfiniteStorybookMessageUtilsMessageTreeEditStateModule {}
