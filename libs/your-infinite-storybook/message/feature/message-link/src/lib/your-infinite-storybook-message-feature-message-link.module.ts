import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageLinkModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-link';

import { MessageLinkComponent } from './message-link/message-link.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageUiMessageLinkModule
    ],
    declarations: [MessageLinkComponent],
    exports: [MessageLinkComponent]
})
export class YourInfiniteStorybookMessageFeatureMessageLinkModule {}
