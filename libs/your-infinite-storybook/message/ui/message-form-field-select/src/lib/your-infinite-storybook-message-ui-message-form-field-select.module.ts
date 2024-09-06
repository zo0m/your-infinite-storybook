import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageFormFieldSelectComponent } from './message-form-field-select/message-form-field-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [MessageFormFieldSelectComponent],
    exports: [MessageFormFieldSelectComponent]
})
export class YourInfiniteStorybookMessageUiMessageFormFieldSelectModule {}
