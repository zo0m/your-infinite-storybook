import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'your-infinite-storybook-user-ui-user-loader',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-loader.component.pug',
    styleUrls: ['./user-loader.component.scss']
})
export class UserLoaderComponent {
    constructor() {}
}
