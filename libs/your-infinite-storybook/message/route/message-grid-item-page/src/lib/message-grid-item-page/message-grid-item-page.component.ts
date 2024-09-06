import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-message-route-message-grid-item-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-grid-item-page.component.pug',
    styleUrls: ['./message-grid-item-page.component.scss']
})
export class MessageGridItemPageComponent {
    messageIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('messageId'))
    );

    constructor(private activatedRoute: ActivatedRoute) {}
}
