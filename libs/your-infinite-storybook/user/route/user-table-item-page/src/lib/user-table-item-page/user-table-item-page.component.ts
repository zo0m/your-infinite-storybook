import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-user-route-user-table-item-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-table-item-page.component.pug',
    styleUrls: ['./user-table-item-page.component.scss']
})
export class UserTableItemPageComponent {
    userIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('userId'))
    );

    constructor(private activatedRoute: ActivatedRoute) {}
}
