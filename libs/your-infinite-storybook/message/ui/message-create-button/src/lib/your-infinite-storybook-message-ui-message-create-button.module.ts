import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageCreateButtonComponent } from './message-create-button/message-create-button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [MessageCreateButtonComponent],
    exports: [MessageCreateButtonComponent]
})
export class YourInfiniteStorybookMessageUiMessageCreateButtonModule {}
