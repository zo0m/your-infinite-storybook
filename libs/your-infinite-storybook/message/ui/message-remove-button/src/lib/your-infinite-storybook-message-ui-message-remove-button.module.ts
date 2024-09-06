import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageRemoveButtonComponent } from './message-remove-button/message-remove-button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [MessageRemoveButtonComponent],
    exports: [MessageRemoveButtonComponent]
})
export class YourInfiniteStorybookMessageUiMessageRemoveButtonModule {}
