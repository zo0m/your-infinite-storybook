import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-user-route-user-grid-item-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-grid-item-page.component.pug',
    styleUrls: ['./user-grid-item-page.component.scss']
})
export class UserGridItemPageComponent {
    userIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('userId'))
    );

    constructor(private activatedRoute: ActivatedRoute) {}
}
