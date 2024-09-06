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

import { StoryOnStoryLinkYourInfiniteStorybookStoryUiStoryLinkFragment as StoryFragment } from './__generated__/story-link.component.graphql';

export const STORY_LINK_DEFAULT_OPTIONS = new InjectionToken<DefaultOptions>(
    'YOUR_INFINITE_STORYBOOK_STORY_UI_STORY_LINK_DEFAULT_OPTIONS'
);

export function provideDefaultOptionsForStoryLink(
    params?: DefaultOptionsFactoryParams
): FactoryProvider {
    return provideDefaultOptionsForLink(STORY_LINK_DEFAULT_OPTIONS, params);
}

@Component({
    selector: 'your-infinite-storybook-story-ui-story-link',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-link.component.pug',
    styleUrls: ['./story-link.component.scss']
})
export class StoryLinkComponent {
    @Input() title = '';
    @Input() loading = false;
    @Input() story: StoryFragment | null | undefined;
    @Input() link: any[];
    @Input() text: string;
    @Input() storyId: string | null | undefined;

    constructor(
        @Optional()
        @Inject(STORY_LINK_DEFAULT_OPTIONS)
        private _defaults: DefaultOptions
    ) {
        this._defaults = this._defaults || {
            linkPrefix: '/stories',
            linkPostfix: ''
        };
    }

    hasValue() {
        return (this.link && this.text) || this.getStoryId();
    }

    getText(): string {
        return this.text || this.story?.id || this.getStoryId() || '';
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
