import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageFormFieldSearchComponent } from './message-form-field-search/message-form-field-search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [MessageFormFieldSearchComponent],
    exports: [MessageFormFieldSearchComponent]
})
export class YourInfiniteStorybookMessageUiMessageFormFieldSearchModule {}
