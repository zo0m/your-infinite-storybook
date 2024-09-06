import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageTableModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-table';

import { MessageTableComponent } from './message-table/message-table.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageUiMessageTableModule
    ],
    declarations: [MessageTableComponent],
    exports: [MessageTableComponent]
})
export class YourInfiniteStorybookMessageFeatureMessageTableModule {}
