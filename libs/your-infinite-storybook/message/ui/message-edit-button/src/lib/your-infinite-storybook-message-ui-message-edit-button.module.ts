import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageEditButtonComponent } from './message-edit-button/message-edit-button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [MessageEditButtonComponent],
    exports: [MessageEditButtonComponent]
})
export class YourInfiniteStorybookMessageUiMessageEditButtonModule {}
