import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-message-route-message-list-item-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-list-item-page.component.pug',
    styleUrls: ['./message-list-item-page.component.scss']
})
export class MessageListItemPageComponent {
    messageIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('messageId'))
    );

    constructor(private activatedRoute: ActivatedRoute) {}
}
