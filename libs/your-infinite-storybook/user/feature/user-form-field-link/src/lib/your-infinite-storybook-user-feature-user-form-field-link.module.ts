import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserFormFieldLinkModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-form-field-link';

import { UserFormFieldLinkComponent } from './user-form-field-link/user-form-field-link.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserUiUserFormFieldLinkModule
    ],
    declarations: [UserFormFieldLinkComponent],
    exports: [UserFormFieldLinkComponent]
})
export class YourInfiniteStorybookUserFeatureUserFormFieldLinkModule {}
