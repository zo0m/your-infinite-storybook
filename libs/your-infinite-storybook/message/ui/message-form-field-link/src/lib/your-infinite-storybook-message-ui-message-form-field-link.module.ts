import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageFormFieldLinkComponent } from './message-form-field-link/message-form-field-link.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SharedUiMaterialModule
    ],
    declarations: [MessageFormFieldLinkComponent],
    exports: [MessageFormFieldLinkComponent]
})
export class YourInfiniteStorybookMessageUiMessageFormFieldLinkModule {}
