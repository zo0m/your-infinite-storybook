import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-message-route-message-edit-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-edit-page.component.pug',
    styleUrls: ['./message-edit-page.component.scss']
})
export class MessageEditPageComponent {
    messageIdParam$ = this.activatedRoute.parent.parent.paramMap.pipe(
        map((params) => params.get('messageId'))
    );

    constructor(private activatedRoute: ActivatedRoute) {}

    onSave() {}

    onDelete() {}
}
