import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessageTreeStateService } from './message-tree-state/message-tree-state.service';

@NgModule({
    imports: [CommonModule],
    providers: [MessageTreeStateService]
})
export class YourInfiniteStorybookMessageUtilsMessageTreeStateModule {}
