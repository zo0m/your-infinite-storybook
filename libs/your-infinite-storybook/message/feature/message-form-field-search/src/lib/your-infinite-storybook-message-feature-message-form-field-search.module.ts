import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookMessageUiMessageFormFieldSearchModule } from '@your-infinite-storybook/your-infinite-storybook/message/ui/message-form-field-search';

import { MessageFormFieldSearchComponent } from './message-form-field-search/message-form-field-search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookMessageUiMessageFormFieldSearchModule
    ],
    declarations: [MessageFormFieldSearchComponent],
    exports: [MessageFormFieldSearchComponent]
})
export class YourInfiniteStorybookMessageFeatureMessageFormFieldSearchModule {}
