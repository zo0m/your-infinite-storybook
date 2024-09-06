import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'your-infinite-storybook-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'your-infinite-storybook-web';

    constructor(library: FaIconLibrary) {
        library.addIconPacks(far, fas);
        console.log(`process.env.NODE_ENV = `, process.env['NODE_ENV']);
        console.log(`process.env.API_HOST = `, process.env['API_HOST']);
        console.log(`process.env.API_PORT = `, process.env['API_PORT']);
    }
}
