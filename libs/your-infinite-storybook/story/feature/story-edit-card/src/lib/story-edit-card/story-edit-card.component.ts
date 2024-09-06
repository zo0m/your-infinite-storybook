import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import * as _ from 'lodash';
import { BehaviorSubject, EMPTY, Observable, firstValueFrom } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { UpdateStoryInput } from '@your-infinite-storybook/your-infinite-storybook/shared/utils/graphql-client-schema';

import {
    EditStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardGQL as EditStoryGQL,
    GetStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardGQL as GetStoryGQL,
    GetStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardQuery as GetStoryQuery,
    StoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardFragment as StoryFragment
} from './__generated__/story-edit-card.component.graphql';

@Component({
    selector: 'your-infinite-storybook-story-feature-story-edit-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './story-edit-card.component.pug',
    styleUrls: ['./story-edit-card.component.scss']
})
export class StoryEditCardComponent {
    @Output() readonly storyEdit = new EventEmitter<string>();

    @Input() set storyId(storyId: string | null | undefined) {
        this.storyId$.next(storyId);
    }

    get storyId() {
        return this.storyId$.value;
    }

    storyId$ = new BehaviorSubject<string | null | undefined>(undefined);

    story?: UpdateStoryInput | null;
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

                            if (networkStatus === 1 && data.story) {
                                this.loading = false;
                            } else {
                                this.loading = loading;
                            }

                            if (data.story) {
                                this.story = {
                                    ...data.story
                                } as UpdateStoryInput;
                            }
                            this.error = error;
                        })
                    );

            return query$;
        })
    );

    loading$ = new BehaviorSubject<boolean>(false);

    set loading(loading: boolean) {
        this.loading$.next(loading);
    }

    get loading() {
        return this.loading$.value;
    }

    constructor(
        private getStoryGQL: GetStoryGQL,
        private editStoryGQL: EditStoryGQL
    ) {}

    async editStory(editedStory: UpdateStoryInput) {
        try {
            this.loading = true;

            const story = _.omit(editedStory, '__typename');
            const result = await firstValueFrom(
                this.editStoryGQL.mutate({ story })
            );

            const [updatedStory] = result?.data?.storiesUpdate ?? [];
            this.loading = false;

            if (updatedStory?.id) {
                this.storyEdit.emit(updatedStory.id);
            }
        } catch (error) {
            console.log(`onStorySubmit() error = ${error}`);
            throw error;
        }
    }

    onStoryEditCardDelete(deletedStoryId: string) {}

    onStoryEditCardSave(editedStory: UpdateStoryInput) {
        this.editStory(editedStory);
    }
}
