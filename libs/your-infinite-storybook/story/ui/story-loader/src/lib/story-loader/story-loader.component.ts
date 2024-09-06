import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'your-infinite-storybook-story-ui-story-loader',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-loader.component.pug',
    styleUrls: ['./story-loader.component.scss']
})
export class StoryLoaderComponent {
    constructor() {}
}
