import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageGridItemComponent } from './message-grid-item/message-grid-item.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [MessageGridItemComponent],
    exports: [MessageGridItemComponent]
})
export class YourInfiniteStorybookMessageUiMessageGridItemModule {}
