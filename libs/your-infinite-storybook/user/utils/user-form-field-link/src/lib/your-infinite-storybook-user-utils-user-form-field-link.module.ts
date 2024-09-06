import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserFormFieldLinkService } from './user-form-field-link/user-form-field-link.service';

@NgModule({
    imports: [CommonModule],
    providers: [UserFormFieldLinkService]
})
export class YourInfiniteStorybookUserUtilsUserFormFieldLinkModule {}
