import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { UserLoaderComponent } from './user-loader/user-loader.component';

@NgModule({
    imports: [CommonModule, FormsModule, SharedUiMaterialModule],
    declarations: [UserLoaderComponent],
    exports: [UserLoaderComponent]
})
export class YourInfiniteStorybookUserUiUserLoaderModule {}
