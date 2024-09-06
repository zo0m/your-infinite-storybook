import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessageFormFieldLinkService } from './message-form-field-link/message-form-field-link.service';

@NgModule({
    imports: [CommonModule],
    providers: [MessageFormFieldLinkService]
})
export class YourInfiniteStorybookMessageUtilsMessageFormFieldLinkModule {}
