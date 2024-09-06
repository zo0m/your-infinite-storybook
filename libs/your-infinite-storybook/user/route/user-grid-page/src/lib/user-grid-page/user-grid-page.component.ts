import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'your-infinite-storybook-user-route-user-grid-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-grid-page.component.pug',
    styleUrls: ['./user-grid-page.component.scss']
})
export class UserGridPageComponent {
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
