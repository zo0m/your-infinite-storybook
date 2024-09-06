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
    GetStoriesOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableGQL as GetStoriesGQL,
    GetStoriesOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableQuery as GetStoriesQuery,
    GetStoriesOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableQueryVariables as GetStoriesQueryVariables,
    StoryOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableFragment as StoryFragment
} from './__generated__/story-table.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-feature-story-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-table.component.pug',
    styleUrls: ['./story-table.component.scss']
})
export class StoryTableComponent {
    @Input() set where(where: GetStoriesQueryVariables['where']) {
        this.where$.next(where);
    }

    get where() {
        return this.where$.value;
    }

    where$ = new BehaviorSubject<GetStoriesQueryVariables['where']>(undefined);

    @Output() readonly storyTableClick = new EventEmitter<string>();

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

    onStoryTableClick(id: string) {
        if (id) {
            this.storyTableClick.emit(id);
        }
    }
}
