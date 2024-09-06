import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageGridItemModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-grid-item';

import { MessageGridComponent } from './message-grid/message-grid.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookMessageUiMessageGridItemModule
    ],
    declarations: [MessageGridComponent],
    exports: [MessageGridComponent]
})
export class YourInfiniteStorybookMessageUiMessageGridModule {}
