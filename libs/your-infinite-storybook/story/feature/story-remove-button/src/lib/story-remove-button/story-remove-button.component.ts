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
    GetStoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonGQL as GetStoryGQL,
    GetStoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonQuery as GetStoryQuery,
    StoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonFragment as StoryFragment
} from './__generated__/story-remove-button.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-feature-story-remove-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-remove-button.component.pug',
    styleUrls: ['./story-remove-button.component.scss']
})
export class StoryRemoveButtonComponent {
    @Input() placeholder = '';

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
