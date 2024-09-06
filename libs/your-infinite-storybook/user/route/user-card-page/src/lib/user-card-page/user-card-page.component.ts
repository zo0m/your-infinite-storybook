import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-user-route-user-card-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-card-page.component.pug',
    styleUrls: ['./user-card-page.component.scss']
})
export class UserCardPageComponent {
    userIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('userId'))
    );

    constructor(private activatedRoute: ActivatedRoute) {}
}
