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
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';

import { MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageUiMessageFormFieldLinkFragment as MessageFragment } from './__generated__/message-form-field-link.component.graphql';

export interface DefaultOptions {
    target?: string;
    linkPrefix?: string;
    linkPostfix?: string;
}

export const DEFAULT_OPTIONS = new InjectionToken<DefaultOptions>(
    'YOUR_INFINITE_STORYBOOK_MESSAGE_UI_MESSAGE_FORM_FIELD_LINK_DEFAULT_OPTIONS'
);

export interface DefaultOptionsFactoryParams extends DefaultOptions {
    relativePath?: string;
}

export function provideDefaultOptionsForMessageFormFieldLink(
    params?: DefaultOptionsFactoryParams
): FactoryProvider {
    const defaultParams = { relativePath: './', linkPrefix: '' };
    const { relativePath, linkPrefix, linkPostfix, target } = {
        ...defaultParams,
        ...params
    };

    return {
        provide: DEFAULT_OPTIONS,
        deps: [ActivatedRoute, Router],
        useFactory: (
            activatedRoute: ActivatedRoute,
            router: Router
        ): DefaultOptions => {
            const urlTree = router.createUrlTree([relativePath], {
                relativeTo: activatedRoute
            });
            const activeRoutePath = router.serializeUrl(urlTree);

            return {
                linkPrefix: activeRoutePath + linkPrefix,
                linkPostfix,
                target
            };
        }
    };
}

@Component({
    selector: 'your-infinite-storybook-message-ui-message-form-field-link',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './message-form-field-link.component.pug',
    styleUrls: ['./message-form-field-link.component.scss']
})
export class MessageFormFieldLinkComponent {
    @Input() placeholder = '';
    @Input() loading = false;
    @Input() message: MessageFragment | null | undefined;
    @Input() link: any[];
    @Input() title: string;
    @Input() messageId: string | null | undefined;

    constructor(
        @Optional() @Inject(DEFAULT_OPTIONS) private _defaults: DefaultOptions
    ) {
        this._defaults = this._defaults || {
            linkPrefix: '/messages',
            linkPostfix: ''
        };
    }

    hasValue() {
        return (this.link && this.title) || this.getMessageId();
    }

    getTitle(): string {
        return this.title || this.message?.id || this.getMessageId() || '';
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
