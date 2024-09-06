import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
    selector: 'your-infinite-storybook-message-route-message-create-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-create-page.component.pug',
    styleUrls: ['./message-create-page.component.scss']
})
export class MessageCreatePageComponent {}
