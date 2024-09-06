import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'your-infinite-storybook-message-route-message-table-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-table-page.component.pug',
    styleUrls: ['./message-table-page.component.scss']
})
export class MessageTablePageComponent {
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
