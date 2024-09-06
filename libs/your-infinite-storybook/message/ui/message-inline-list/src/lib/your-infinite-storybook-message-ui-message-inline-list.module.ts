import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageInlineListItemModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-inline-list-item';

import { MessageInlineListComponent } from './message-inline-list/message-inline-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookMessageUiMessageInlineListItemModule
    ],
    declarations: [MessageInlineListComponent],
    exports: [MessageInlineListComponent]
})
export class YourInfiniteStorybookMessageUiMessageInlineListModule {}
