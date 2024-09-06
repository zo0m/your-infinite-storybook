import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserFormFieldSelectModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-form-field-select';

import { UserFormFieldSelectComponent } from './user-form-field-select/user-form-field-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserUiUserFormFieldSelectModule
    ],
    declarations: [UserFormFieldSelectComponent],
    exports: [UserFormFieldSelectComponent]
})
export class YourInfiniteStorybookUserFeatureUserFormFieldSelectModule {}
