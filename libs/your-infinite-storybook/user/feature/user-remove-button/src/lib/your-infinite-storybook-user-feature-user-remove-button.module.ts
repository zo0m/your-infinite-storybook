import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserRemoveButtonComponent } from './user-remove-button/user-remove-button.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [UserRemoveButtonComponent],
    exports: [UserRemoveButtonComponent]
})
export class YourInfiniteStorybookUserFeatureUserRemoveButtonModule {}
