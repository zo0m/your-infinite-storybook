import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-story-route-story-grid-item-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-grid-item-page.component.pug',
    styleUrls: ['./story-grid-item-page.component.scss']
})
export class StoryGridItemPageComponent {
    storyIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('storyId'))
    );

    constructor(private activatedRoute: ActivatedRoute) {}
}
