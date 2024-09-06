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

import { UserOnUserLinkYourInfiniteStorybookUserUiUserLinkFragment as UserFragment } from './__generated__/user-link.component.graphql';

export const USER_LINK_DEFAULT_OPTIONS = new InjectionToken<DefaultOptions>(
    'YOUR_INFINITE_STORYBOOK_USER_UI_USER_LINK_DEFAULT_OPTIONS'
);

export function provideDefaultOptionsForUserLink(
    params?: DefaultOptionsFactoryParams
): FactoryProvider {
    return provideDefaultOptionsForLink(USER_LINK_DEFAULT_OPTIONS, params);
}

@Component({
    selector: 'your-infinite-storybook-user-ui-user-link',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-link.component.pug',
    styleUrls: ['./user-link.component.scss']
})
export class UserLinkComponent {
    @Input() title = '';
    @Input() loading = false;
    @Input() user: UserFragment | null | undefined;
    @Input() link: any[];
    @Input() text: string;
    @Input() userId: string | null | undefined;

    constructor(
        @Optional()
        @Inject(USER_LINK_DEFAULT_OPTIONS)
        private _defaults: DefaultOptions
    ) {
        this._defaults = this._defaults || {
            linkPrefix: '/users',
            linkPostfix: ''
        };
    }

    hasValue() {
        return (this.link && this.text) || this.getUserId();
    }

    getText(): string {
        return this.text || this.user?.name || this.getUserId() || '';
    }

    getUserId(): string {
        return this.userId || this.user?.id || '';
    }

    getUserLink() {
        const { linkPrefix, linkPostfix } = this._defaults;
        return (
            this.link || _.compact([linkPrefix, this.getUserId(), linkPostfix])
        );
    }
}
