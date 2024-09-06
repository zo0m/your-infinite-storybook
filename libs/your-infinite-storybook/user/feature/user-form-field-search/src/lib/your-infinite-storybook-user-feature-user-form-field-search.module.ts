import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserFormFieldSearchModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-form-field-search';

import { UserFormFieldSearchComponent } from './user-form-field-search/user-form-field-search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserUiUserFormFieldSearchModule
    ],
    declarations: [UserFormFieldSearchComponent],
    exports: [UserFormFieldSearchComponent]
})
export class YourInfiniteStorybookUserFeatureUserFormFieldSearchModule {}
