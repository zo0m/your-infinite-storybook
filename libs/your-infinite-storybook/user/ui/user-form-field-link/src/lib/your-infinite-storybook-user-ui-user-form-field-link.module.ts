import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserFormFieldLinkComponent } from './user-form-field-link/user-form-field-link.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SharedUiMaterialModule
    ],
    declarations: [UserFormFieldLinkComponent],
    exports: [UserFormFieldLinkComponent]
})
export class YourInfiniteStorybookUserUiUserFormFieldLinkModule {}
