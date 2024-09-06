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

import { StoryOnStoryFormFieldLinkYourInfiniteStorybookStoryUiStoryFormFieldLinkFragment as StoryFragment } from './__generated__/story-form-field-link.component.graphql';

export interface DefaultOptions {
    target?: string;
    linkPrefix?: string;
    linkPostfix?: string;
}

export const DEFAULT_OPTIONS = new InjectionToken<DefaultOptions>(
    'YOUR_INFINITE_STORYBOOK_STORY_UI_STORY_FORM_FIELD_LINK_DEFAULT_OPTIONS'
);

export interface DefaultOptionsFactoryParams extends DefaultOptions {
    relativePath?: string;
}

export function provideDefaultOptionsForStoryFormFieldLink(
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
    selector: 'your-infinite-storybook-story-ui-story-form-field-link',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-form-field-link.component.pug',
    styleUrls: ['./story-form-field-link.component.scss']
})
export class StoryFormFieldLinkComponent {
    @Input() placeholder = '';
    @Input() loading = false;
    @Input() story: StoryFragment | null | undefined;
    @Input() link: any[];
    @Input() title: string;
    @Input() storyId: string | null | undefined;

    constructor(
        @Optional() @Inject(DEFAULT_OPTIONS) private _defaults: DefaultOptions
    ) {
        this._defaults = this._defaults || {
            linkPrefix: '/stories',
            linkPostfix: ''
        };
    }

    hasValue() {
        return (this.link && this.title) || this.getStoryId();
    }

    getTitle(): string {
        return this.title || this.story?.id || this.getStoryId() || '';
    }

    getStoryId(): string {
        return this.storyId || this.story?.id || '';
    }

    getStoryLink() {
        const { linkPrefix, linkPostfix } = this._defaults;
        return (
            this.link || _.compact([linkPrefix, this.getStoryId(), linkPostfix])
        );
    }
}
