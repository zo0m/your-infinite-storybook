import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { MessageLoaderComponent } from './message-loader/message-loader.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [MessageLoaderComponent],
    exports: [MessageLoaderComponent]
})
export class YourInfiniteStorybookMessageUiMessageLoaderModule {}
