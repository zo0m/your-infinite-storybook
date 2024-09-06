import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-story-route-story-create-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-create-page.component.pug',
    styleUrls: ['./story-create-page.component.scss']
})
export class StoryCreatePageComponent {
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

    navigateToStory(storyId: string) {
        this.navigate(['/stories', 'list', storyId]);
    }
}
