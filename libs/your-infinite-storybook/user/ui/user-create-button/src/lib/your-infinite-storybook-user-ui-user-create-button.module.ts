import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserCreateButtonComponent } from './user-create-button/user-create-button.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedUiMaterialModule
    ],
    declarations: [UserCreateButtonComponent],
    exports: [UserCreateButtonComponent]
})
export class YourInfiniteStorybookUserUiUserCreateButtonModule {}
