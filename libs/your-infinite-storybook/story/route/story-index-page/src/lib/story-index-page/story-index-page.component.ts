import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'your-infinite-storybook-story-route-story-index-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-index-page.component.pug',
    styleUrls: ['./story-index-page.component.scss']
})
export class StoryIndexPageComponent {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    navigate(path: string | any[]) {
        if (typeof path === 'string') {
            path = [path];
        }

        this.router.navigate([...path], {
            relativeTo: this.activatedRoute.parent
        });
    }
}
