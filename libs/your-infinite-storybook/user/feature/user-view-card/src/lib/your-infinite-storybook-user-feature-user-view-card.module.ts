import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserViewCardModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-view-card';

import { UserViewCardComponent } from './user-view-card/user-view-card.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserUiUserViewCardModule
    ],
    declarations: [UserViewCardComponent],
    exports: [UserViewCardComponent]
})
export class YourInfiniteStorybookUserFeatureUserViewCardModule {}
