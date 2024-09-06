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

import { UserOnUserFormFieldLinkYourInfiniteStorybookUserUiUserFormFieldLinkFragment as UserFragment } from './__generated__/user-form-field-link.component.graphql';

export interface DefaultOptions {
    target?: string;
    linkPrefix?: string;
    linkPostfix?: string;
}

export const DEFAULT_OPTIONS = new InjectionToken<DefaultOptions>(
    'YOUR_INFINITE_STORYBOOK_USER_UI_USER_FORM_FIELD_LINK_DEFAULT_OPTIONS'
);

export interface DefaultOptionsFactoryParams extends DefaultOptions {
    relativePath?: string;
}

export function provideDefaultOptionsForUserFormFieldLink(
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
    selector: 'your-infinite-storybook-user-ui-user-form-field-link',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-form-field-link.component.pug',
    styleUrls: ['./user-form-field-link.component.scss']
})
export class UserFormFieldLinkComponent {
    @Input() placeholder = '';
    @Input() loading = false;
    @Input() user: UserFragment | null | undefined;
    @Input() link: any[];
    @Input() title: string;
    @Input() userId: string | null | undefined;

    constructor(
        @Optional() @Inject(DEFAULT_OPTIONS) private _defaults: DefaultOptions
    ) {
        this._defaults = this._defaults || {
            linkPrefix: '/users',
            linkPostfix: ''
        };
    }

    hasValue() {
        return (this.link && this.title) || this.getUserId();
    }

    getTitle(): string {
        return this.title || this.user?.name || this.getUserId() || '';
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
