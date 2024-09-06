import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageFormFieldLinkModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-form-field-link';

import { MessageFormFieldLinkComponent } from './message-form-field-link/message-form-field-link.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageUiMessageFormFieldLinkModule
    ],
    declarations: [MessageFormFieldLinkComponent],
    exports: [MessageFormFieldLinkComponent]
})
export class YourInfiniteStorybookMessageFeatureMessageFormFieldLinkModule {}
