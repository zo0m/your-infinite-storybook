import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'your-infinite-storybook-message-ui-message-loader',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-loader.component.pug',
    styleUrls: ['./message-loader.component.scss']
})
export class MessageLoaderComponent {
    constructor() {}
}
