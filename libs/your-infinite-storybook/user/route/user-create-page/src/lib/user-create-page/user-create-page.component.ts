import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-user-route-user-create-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-create-page.component.pug',
    styleUrls: ['./user-create-page.component.scss']
})
export class UserCreatePageComponent {}
