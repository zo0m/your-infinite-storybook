import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageInlineListModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-inline-list';

import { MessageInlineListComponent } from './message-inline-list/message-inline-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageUiMessageInlineListModule
    ],
    declarations: [MessageInlineListComponent],
    exports: [MessageInlineListComponent]
})
export class YourInfiniteStorybookMessageFeatureMessageInlineListModule {}
