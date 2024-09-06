import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserCreateCardComponent } from './user-create-card/user-create-card.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [UserCreateCardComponent],
    exports: [UserCreateCardComponent]
})
export class YourInfiniteStorybookUserUiUserCreateCardModule {}
