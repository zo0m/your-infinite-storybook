import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-story-route-story-edit-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-edit-page.component.pug',
    styleUrls: ['./story-edit-page.component.scss']
})
export class StoryEditPageComponent {
    storyIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('storyId'))
    );

    constructor(private activatedRoute: ActivatedRoute) {}

    onSave() {}

    onDelete() {}
}
