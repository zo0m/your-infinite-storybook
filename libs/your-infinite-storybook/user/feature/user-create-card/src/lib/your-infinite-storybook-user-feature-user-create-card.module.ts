import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserCreateCardModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-create-card';

import { UserCreateCardComponent } from './user-create-card/user-create-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserUiUserCreateCardModule
    ],
    declarations: [UserCreateCardComponent],
    exports: [UserCreateCardComponent]
})
export class YourInfiniteStorybookUserFeatureUserCreateCardModule {}
