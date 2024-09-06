import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit
} from '@angular/core';
import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import {
    GetStoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardGQL as GetStoryGQL,
    GetStoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardQuery as GetStoryQuery,
    StoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardFragment as StoryFragment
} from './__generated__/story-view-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-feature-story-view-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-view-card.component.pug',
    styleUrls: ['./story-view-card.component.scss']
})
export class StoryViewCardComponent {
    @Input() set storyId(storyId: string) {
        this.storyId$.next(storyId);
    }

    get storyId() {
        return this.storyId$.value;
    }

    storyId$ = new BehaviorSubject<string | undefined>(undefined);

    story: StoryFragment;
    loading = true;
    error?: ApolloError;

    readonly query$ = this.storyId$.pipe(
        switchMap((storyId) => {
            if (!storyId) {
                return EMPTY;
            }

            const query$: Observable<ApolloQueryResult<GetStoryQuery>> =
                this.getStoryGQL
                    .watch(
                        { storyId },
                        {
                            returnPartialData: true,
                            fetchPolicy: 'cache-and-network',
                            errorPolicy: 'all'
                        }
                    )
                    .valueChanges.pipe(
                        tap((result: ApolloQueryResult<GetStoryQuery>) => {
                            const { data, error, loading, networkStatus } =
                                result;
                            this.loading = loading;
                            this.story = { ...data.story };
                            this.error = error;
                        })
                    );

            return query$;
        })
    );

    constructor(private getStoryGQL: GetStoryGQL) {}
}
