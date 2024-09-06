import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageEditCardModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-edit-card';

import { MessageEditCardComponent } from './message-edit-card/message-edit-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageUiMessageEditCardModule
    ],
    declarations: [MessageEditCardComponent],
    exports: [MessageEditCardComponent]
})
export class YourInfiniteStorybookMessageFeatureMessageEditCardModule {}
