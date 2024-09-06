import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageFormFieldSelectModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-form-field-select';

import { MessageFormFieldSelectComponent } from './message-form-field-select/message-form-field-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageUiMessageFormFieldSelectModule
    ],
    declarations: [MessageFormFieldSelectComponent],
    exports: [MessageFormFieldSelectComponent]
})
export class YourInfiniteStorybookMessageFeatureMessageFormFieldSelectModule {}
