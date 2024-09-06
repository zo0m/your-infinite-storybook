import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageEditButtonComponent } from './message-edit-button/message-edit-button.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [MessageEditButtonComponent],
    exports: [MessageEditButtonComponent]
})
export class YourInfiniteStorybookMessageFeatureMessageEditButtonModule {}
