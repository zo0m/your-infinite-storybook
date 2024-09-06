import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-story-route-story-table-item-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-table-item-page.component.pug',
    styleUrls: ['./story-table-item-page.component.scss']
})
export class StoryTableItemPageComponent {
    storyIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('storyId'))
    );

    constructor(private activatedRoute: ActivatedRoute) {}
}
