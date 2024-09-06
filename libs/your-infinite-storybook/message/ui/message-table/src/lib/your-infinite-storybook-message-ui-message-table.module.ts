import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageTableCellModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-table-cell';

import { MessageTableComponent } from './message-table/message-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookMessageUiMessageTableCellModule
    ],
    declarations: [MessageTableComponent],
    exports: [MessageTableComponent]
})
export class YourInfiniteStorybookMessageUiMessageTableModule {}
