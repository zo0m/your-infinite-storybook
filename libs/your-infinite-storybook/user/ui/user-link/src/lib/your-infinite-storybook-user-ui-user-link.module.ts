import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserLinkComponent } from './user-link/user-link.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule, SharedUiMaterialModule],
    declarations: [UserLinkComponent],
    exports: [UserLinkComponent]
})
export class YourInfiniteStorybookUserUiUserLinkModule {}
