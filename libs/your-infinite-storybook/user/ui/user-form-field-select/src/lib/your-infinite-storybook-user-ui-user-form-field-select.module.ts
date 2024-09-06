import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserFormFieldSelectComponent } from './user-form-field-select/user-form-field-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [UserFormFieldSelectComponent],
    exports: [UserFormFieldSelectComponent]
})
export class YourInfiniteStorybookUserUiUserFormFieldSelectModule {}
