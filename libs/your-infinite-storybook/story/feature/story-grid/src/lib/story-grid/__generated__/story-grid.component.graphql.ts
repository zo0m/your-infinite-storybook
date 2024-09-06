import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryGridYourInfiniteStorybookStoryUiStoryGridFragmentDoc } from '../../../../../../ui/story-grid/src/lib/story-grid/__generated__/story-grid.component.graphql';

export type GetStoriesOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        where?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<YourInfiniteStorybookGraphQlClientTypes.StoriesWhereInput>;
    }>;

export type GetStoriesOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridQuery =
    {
        __typename?: 'Query';
        stories: Array<{
            __typename?: 'Story';
            id?: string | null;
            createdAt: any;
            updatedAt: any;
            title?: string | null;
            description?: string | null;
            lesson?: string | null;
            setting?: string | null;
            childName?: string | null;
            childAge?: number | null;
        }>;
    };

export type StoryOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridFragment =
    {
        __typename?: 'Story';
        id?: string | null;
        createdAt: any;
        updatedAt: any;
        title?: string | null;
        description?: string | null;
        lesson?: string | null;
        setting?: string | null;
        childName?: string | null;
        childAge?: number | null;
    };

export const StoryOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridFragmentDoc = gql`
    fragment StoryOnStoryGridYourInfiniteStorybookStoryFeatureStoryGrid on Story {
        ...StoryOnStoryGridYourInfiniteStorybookStoryUiStoryGrid
    }
    ${StoryOnStoryGridYourInfiniteStorybookStoryUiStoryGridFragmentDoc}
`;
export const GetStoriesOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridDocument = gql`
    query GetStoriesOnStoryGridYourInfiniteStorybookStoryFeatureStoryGrid(
        $where: StoriesWhereInput
    ) {
        stories(where: $where) {
            ...StoryOnStoryGridYourInfiniteStorybookStoryFeatureStoryGrid
        }
    }
    ${StoryOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoriesOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridGQL extends Apollo.Query<
    GetStoriesOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridQuery,
    GetStoriesOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridQueryVariables
> {
    override document =
        GetStoriesOnStoryGridYourInfiniteStorybookStoryFeatureStoryGridDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
