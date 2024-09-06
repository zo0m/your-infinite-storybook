import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';

import {
    GetStoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkGQL as GetStoryGQL,
    GetStoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkQuery as GetStoryQuery,
    StoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkFragment as StoryFragment
} from './__generated__/story-form-field-link.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-feature-story-form-field-link',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-form-field-link.component.pug',
    styleUrls: ['./story-form-field-link.component.scss']
})
export class StoryFormFieldLinkComponent {
    @Input() placeholder = '';
    @Input() title = '';

    @Input() set storyId(storyId: string | null | undefined) {
        this.storyId$.next(storyId);
        if (storyId) {
            this.loading = false;
            this.story = null;
        }
    }

    get storyId() {
        return this.storyId$.value;
    }

    storyId$ = new BehaviorSubject<string | null | undefined>(undefined);

    story?: StoryFragment | null;
    error?: ApolloError;
    loading = true;

    readonly query$: Observable<ApolloQueryResult<GetStoryQuery>> =
        this.storyId$.pipe(
            distinctUntilChanged(),
            switchMap((storyId) => {
                if (!storyId) {
                    this.story = null;
                    this.loading = false;
                    return EMPTY;
                }

                return this.getStoryGQL
                    .watch(
                        { storyId },
                        {
                            returnPartialData: true,
                            fetchPolicy: 'cache-first',
                            errorPolicy: 'all'
                        }
                    )
                    .valueChanges.pipe(
                        tap((result: ApolloQueryResult<GetStoryQuery>) => {
                            const { data, error, loading } = result;
                            this.story = data.story;
                            this.loading = loading;
                            this.error = error;
                        })
                    );
            })
        );

    constructor(private getStoryGQL: GetStoryGQL) {}
}
