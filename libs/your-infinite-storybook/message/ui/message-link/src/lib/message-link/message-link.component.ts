import {
    ChangeDetectionStrategy,
    Component,
    FactoryProvider,
    Inject,
    InjectionToken,
    Input,
    OnInit,
    Optional
} from '@angular/core';
import * as _ from 'lodash';

import {
    DefaultOptions,
    DefaultOptionsFactoryParams,
    provideDefaultOptionsForLink
} from '@your-infinite-storybook/shared/utils/link-options-provider';

import { MessageOnMessageLinkYourInfiniteStorybookMessageUiMessageLinkFragment as MessageFragment } from './__generated__/message-link.component.graphql';

export const MESSAGE_LINK_DEFAULT_OPTIONS = new InjectionToken<DefaultOptions>(
    'YOUR_INFINITE_STORYBOOK_MESSAGE_UI_MESSAGE_LINK_DEFAULT_OPTIONS'
);

export function provideDefaultOptionsForMessageLink(
    params?: DefaultOptionsFactoryParams
): FactoryProvider {
    return provideDefaultOptionsForLink(MESSAGE_LINK_DEFAULT_OPTIONS, params);
}

@Component({
    selector: 'your-infinite-storybook-message-ui-message-link',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-link.component.pug',
    styleUrls: ['./message-link.component.scss']
})
export class MessageLinkComponent {
    @Input() title = '';
    @Input() loading = false;
    @Input() message: MessageFragment | null | undefined;
    @Input() link: any[];
    @Input() text: string;
    @Input() messageId: string | null | undefined;

    constructor(
        @Optional()
        @Inject(MESSAGE_LINK_DEFAULT_OPTIONS)
        private _defaults: DefaultOptions
    ) {
        this._defaults = this._defaults || {
            linkPrefix: '/messages',
            linkPostfix: ''
        };
    }

    hasValue() {
        return (this.link && this.text) || this.getMessageId();
    }

    getText(): string {
        return this.text || this.message?.id || this.getMessageId() || '';
    }

    getMessageId(): string {
        return this.messageId || this.message?.id || '';
    }

    getMessageLink() {
        const { linkPrefix, linkPostfix } = this._defaults;
        return (
            this.link ||
            _.compact([linkPrefix, this.getMessageId(), linkPostfix])
        );
    }
}
