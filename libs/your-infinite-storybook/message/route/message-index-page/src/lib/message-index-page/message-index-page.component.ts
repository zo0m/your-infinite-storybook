import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'your-infinite-storybook-message-route-message-index-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-index-page.component.pug',
    styleUrls: ['./message-index-page.component.scss']
})
export class MessageIndexPageComponent {
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
