import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'your-infinite-storybook-user-route-user-index-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-index-page.component.pug',
    styleUrls: ['./user-index-page.component.scss']
})
export class UserIndexPageComponent {
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
