import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageListItemModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-list-item';

import { MessageListComponent } from './message-list/message-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,
        YourInfiniteStorybookMessageUiMessageListItemModule
    ],
    declarations: [MessageListComponent],
    exports: [MessageListComponent]
})
export class YourInfiniteStorybookMessageUiMessageListModule {}
