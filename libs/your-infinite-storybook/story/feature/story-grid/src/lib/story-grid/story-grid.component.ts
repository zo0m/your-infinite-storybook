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
    GetStoriesOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridGQL as GetStoriesGQL,
    GetStoriesOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridQuery as GetStoriesQuery,
    GetStoriesOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridQueryVariables as GetStoriesQueryVariables,
    StoryOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridFragment as StoryFragment
} from './__generated__/story-grid.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-feature-story-grid',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-grid.component.pug',
    styleUrls: ['./story-grid.component.scss']
})
export class StoryGridComponent {
    @Input() set where(where: GetStoriesQueryVariables['where']) {
        this.where$.next(where);
    }

    get where() {
        return this.where$.value;
    }

    where$ = new BehaviorSubject<GetStoriesQueryVariables['where']>(undefined);

    @Output() readonly storyGridClick = new EventEmitter<string>();

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

    onStoryGridClick(id: string) {
        if (id) {
            this.storyGridClick.emit(id);
        }
    }
}
