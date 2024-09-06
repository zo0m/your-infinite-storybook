import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageTableCellComponent } from './message-table-cell/message-table-cell.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [MessageTableCellComponent],
    exports: [MessageTableCellComponent]
})
export class YourInfiniteStorybookMessageUiMessageTableCellModule {}
