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
    GetStoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonGQL as GetStoryGQL,
    GetStoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonQuery as GetStoryQuery,
    StoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonFragment as StoryFragment
} from './__generated__/story-create-button.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-feature-story-create-button',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-create-button.component.pug',
    styleUrls: ['./story-create-button.component.scss']
})
export class StoryCreateButtonComponent {
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
