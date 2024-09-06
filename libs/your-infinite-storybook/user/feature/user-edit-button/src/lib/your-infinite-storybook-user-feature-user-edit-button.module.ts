import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserEditButtonComponent } from './user-edit-button/user-edit-button.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [UserEditButtonComponent],
    exports: [UserEditButtonComponent]
})
export class YourInfiniteStorybookUserFeatureUserEditButtonModule {}
