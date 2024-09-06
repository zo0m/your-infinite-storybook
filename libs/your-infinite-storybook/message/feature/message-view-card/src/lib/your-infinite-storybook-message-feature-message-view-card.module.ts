import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-view-card';

import { MessageViewCardComponent } from './message-view-card/message-view-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageUiMessageViewCardModule
    ],
    declarations: [MessageViewCardComponent],
    exports: [MessageViewCardComponent]
})
export class YourInfiniteStorybookMessageFeatureMessageViewCardModule {}
