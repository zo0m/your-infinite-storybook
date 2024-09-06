import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserEditCardModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-edit-card';

import { UserEditCardComponent } from './user-edit-card/user-edit-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserUiUserEditCardModule
    ],
    declarations: [UserEditCardComponent],
    exports: [UserEditCardComponent]
})
export class YourInfiniteStorybookUserFeatureUserEditCardModule {}
