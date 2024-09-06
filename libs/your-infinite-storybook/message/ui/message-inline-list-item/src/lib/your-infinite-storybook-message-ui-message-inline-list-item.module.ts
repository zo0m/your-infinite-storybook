import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageInlineListItemComponent } from './message-inline-list-item/message-inline-list-item.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [MessageInlineListItemComponent],
    exports: [MessageInlineListItemComponent]
})
export class YourInfiniteStorybookMessageUiMessageInlineListItemModule {}
