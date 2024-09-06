import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageListItemComponent } from './message-list-item/message-list-item.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [MessageListItemComponent],
    exports: [MessageListItemComponent]
})
export class YourInfiniteStorybookMessageUiMessageListItemModule {}
