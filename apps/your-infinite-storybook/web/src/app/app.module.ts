import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedUiMaterialModule } from '@your-infinite-storybook/shared/ui/material';

import { allComponents } from '../components';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { GraphqlConnectionModule } from './graphql-connection/graphql-connection.module';

const appearance: MatFormFieldDefaultOptions = {
    appearance: 'outline'
};

@NgModule({
    declarations: [AppComponent, ...allComponents],
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
