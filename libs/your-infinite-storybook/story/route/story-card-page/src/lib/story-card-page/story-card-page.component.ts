import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-story-route-story-card-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-card-page.component.pug',
    styleUrls: ['./story-card-page.component.scss']
})
export class StoryCardPageComponent {
    storyId: string;
    storyIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('storyId')),
        tap((storyId) => {
            this.storyId = storyId;
        })
    );

    constructor(private activatedRoute: ActivatedRoute) {}
}
