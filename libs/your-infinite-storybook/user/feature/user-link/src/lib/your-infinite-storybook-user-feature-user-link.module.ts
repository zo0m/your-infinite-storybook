import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { YourInfiniteStorybookUserUiUserLinkModule } from '@your-infinite-storybook/your-infinite-storybook/user/ui/user-link';

import { UserLinkComponent } from './user-link/user-link.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedUiMaterialModule,

        YourInfiniteStorybookUserUiUserLinkModule
    ],
    declarations: [UserLinkComponent],
    exports: [UserLinkComponent]
})
export class YourInfiniteStorybookUserFeatureUserLinkModule {}
