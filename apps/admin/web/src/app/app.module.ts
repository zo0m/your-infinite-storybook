import { NgModule } from '@angular/core';
import {
    MAT_FORM_FIELD_DEFAULT_OPTIONS,
    MatFormFieldDefaultOptions
} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';
import { GraphqlConnectionModule } from '@your-infinite-storybook/shared/utils/graphql-connection';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

const appearance: MatFormFieldDefaultOptions = {
    appearance: 'outline'
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking'
        }),
        BrowserAnimationsModule,
        SharedUiMaterialModule,
        FontAwesomeModule,
        GraphqlConnectionModule
    ],
    providers: [
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: appearance
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
