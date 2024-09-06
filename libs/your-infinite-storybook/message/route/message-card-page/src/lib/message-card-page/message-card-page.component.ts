import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-message-route-message-card-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-card-page.component.pug',
    styleUrls: ['./message-card-page.component.scss']
})
export class MessageCardPageComponent {
    messageIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('messageId'))
    );

    constructor(private activatedRoute: ActivatedRoute) {}
}
