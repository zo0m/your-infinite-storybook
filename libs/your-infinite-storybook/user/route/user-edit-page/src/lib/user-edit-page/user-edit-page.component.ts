import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-user-route-user-edit-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-edit-page.component.pug',
    styleUrls: ['./user-edit-page.component.scss']
})
export class UserEditPageComponent {
    userIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('userId'))
    );

    constructor(private activatedRoute: ActivatedRoute) {}

    onSave() {}

    onDelete() {}
}
