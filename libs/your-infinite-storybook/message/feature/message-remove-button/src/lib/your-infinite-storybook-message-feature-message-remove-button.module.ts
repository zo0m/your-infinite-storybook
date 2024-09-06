import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageRemoveButtonComponent } from './message-remove-button/message-remove-button.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [MessageRemoveButtonComponent],
    exports: [MessageRemoveButtonComponent]
})
export class YourInfiniteStorybookMessageFeatureMessageRemoveButtonModule {}
