import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';

import {
    GetStoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchGQL as GetStoryGQL,
    GetStoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchQuery as GetStoryQuery,
    SearchStoriesOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchGQL as SearchStoriesGQL,
    SearchStoriesOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchQuery as SearchStoriesQuery,
    StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchFragment as StoryFragment
} from './__generated__/story-form-field-search.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-feature-story-form-field-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-form-field-search.component.pug',
    styleUrls: ['./story-form-field-search.component.scss']
})
export class StoryFormFieldSearchComponent {
    @Output() readonly storyIdChange = new EventEmitter<string>();

    @Input() placeholder = '';

    @Input() set storyId(storyId: string | null | undefined) {
        if (!this.selectedStory || this.selectedStory.id !== storyId) {
            this.storyId$.next(storyId);
        }

        if (!storyId) {
            this.loading = false;
        }
    }

    get storyId() {
        return this.storyId$.value;
    }

    storyId$ = new BehaviorSubject<string | null | undefined>(undefined);

    selectedStory?: StoryFragment | null;
    error?: ApolloError;
    loading = true;

    readonly getStoryQuery$: Observable<ApolloQueryResult<GetStoryQuery>> =
        this.storyId$.pipe(
            distinctUntilChanged(),
            switchMap((storyId) => {
                if (!storyId) {
                    this.selectedStory = null;
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
                            const { data, error, loading, networkStatus } =
                                result;

                            this.selectedStory = data.story;

                            this.error = error;

                            if (networkStatus === 1 && data.story) {
                                this.loading = false;
                            } else {
                                this.loading = loading;
                            }
                        })
                    );
            })
        );

    search$ = new BehaviorSubject<string | null | undefined>(undefined);

    foundStories: StoryFragment[] = [];
    searchError?: ApolloError;
    searchLoading = false;

    readonly searchStoriesQuery$: Observable<
        ApolloQueryResult<SearchStoriesQuery>
    > = this.search$.pipe(
        filter((search) => !!search),
        switchMap((search) => {
            if (!search) {
                this.foundStories = [];
                return EMPTY;
            }

            return this.searchStoriesGQL
                .watch(
                    { search },
                    {
                        returnPartialData: true,
                        fetchPolicy: 'cache-and-network',
                        errorPolicy: 'all'
                    }
                )
                .valueChanges.pipe(
                    tap((result: ApolloQueryResult<SearchStoriesQuery>) => {
                        const { data, error, loading, networkStatus } = result;

                        if (networkStatus === 1 && data.storiesSearch) {
                            this.searchLoading = false;
                        } else {
                            this.searchLoading = loading;
                        }

                        this.error = error;
                        if (!this.searchLoading) {
                            this.foundStories = data.storiesSearch;
                        }
                    })
                );
        })
    );

    constructor(
        private getStoryGQL: GetStoryGQL,
        private searchStoriesGQL: SearchStoriesGQL
    ) {}

    onStorySearch(search: string) {
        this.search$.next(search);
    }

    onStorySelected(story: StoryFragment) {
        if (story) {
            this.storyIdChange.emit(story.id);
            this.selectedStory = story;
        }
    }
}
