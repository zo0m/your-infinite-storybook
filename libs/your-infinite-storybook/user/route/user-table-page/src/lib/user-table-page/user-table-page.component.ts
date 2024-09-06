import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'your-infinite-storybook-user-route-user-table-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-table-page.component.pug',
    styleUrls: ['./user-table-page.component.scss']
})
export class UserTablePageComponent {
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
