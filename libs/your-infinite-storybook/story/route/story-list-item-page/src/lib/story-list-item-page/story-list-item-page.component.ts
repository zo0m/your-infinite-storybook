import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-story-route-story-list-item-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-list-item-page.component.pug',
    styleUrls: ['./story-list-item-page.component.scss']
})
export class StoryListItemPageComponent {
    storyId: string;
    storyIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('storyId')),
        tap((storyId) => {
            this.storyId = storyId;
        })
    );

    constructor(private activatedRoute: ActivatedRoute) {}
}
