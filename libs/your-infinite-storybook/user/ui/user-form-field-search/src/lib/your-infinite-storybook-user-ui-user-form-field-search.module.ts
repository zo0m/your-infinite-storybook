import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserFormFieldSearchComponent } from './user-form-field-search/user-form-field-search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [UserFormFieldSearchComponent],
    exports: [UserFormFieldSearchComponent]
})
export class YourInfiniteStorybookUserUiUserFormFieldSearchModule {}
