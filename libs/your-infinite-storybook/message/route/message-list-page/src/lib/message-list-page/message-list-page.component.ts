import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'your-infinite-storybook-message-route-message-list-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-list-page.component.pug',
    styleUrls: ['./message-list-page.component.scss']
})
export class MessageListPageComponent {
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
