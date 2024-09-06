import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageCreateCardModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-create-card';

import { MessageCreateCardComponent } from './message-create-card/message-create-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageUiMessageCreateCardModule
    ],
    declarations: [MessageCreateCardComponent],
    exports: [MessageCreateCardComponent]
})
export class YourInfiniteStorybookMessageFeatureMessageCreateCardModule {}
