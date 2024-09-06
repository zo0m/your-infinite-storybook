import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import {
    GetStoriesOnStoryListYourInfiniteStorybookStoryFeatureStoryListGQL as GetStoriesGQL,
    GetStoriesOnStoryListYourInfiniteStorybookStoryFeatureStoryListQuery as GetStoriesQuery,
    GetStoriesOnStoryListYourInfiniteStorybookStoryFeatureStoryListQueryVariables as GetStoriesQueryVariables,
    StoryOnStoryListYourInfiniteStorybookStoryFeatureStoryListFragment as StoryFragment
} from './__generated__/story-list.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-feature-story-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-list.component.pug',
    styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent {
    @Input() set where(where: GetStoriesQueryVariables['where']) {
        this.where$.next(where);
    }

    get where() {
        return this.where$.value;
    }

    where$ = new BehaviorSubject<GetStoriesQueryVariables['where']>(undefined);

    @Output() readonly storyListClick = new EventEmitter<string>();

    query$ = this.where$.pipe(
        switchMap((where) =>
            this.getStoriesGQL
                .watch(
                    { where },
                    {
                        returnPartialData: true,
                        fetchPolicy: 'cache-and-network'
                    }
                )
                .valueChanges.pipe(
                    tap((result: ApolloQueryResult<GetStoriesQuery>) => {
                        const { data, error, loading, networkStatus } = result;

                        if (networkStatus === 1 && data.stories) {
                            this.loading = false;
                        } else {
                            this.loading = loading;
                        }

                        this.stories = data.stories;
                        this.error = error;
                    })
                )
        )
    );

    stories: StoryFragment[] = [];
    loading = true;
    error: any;

    constructor(private getStoriesGQL: GetStoriesGQL) {}

    onStoryListClick(id: string) {
        if (id) {
            this.storyListClick.emit(id);
        }
    }
}
