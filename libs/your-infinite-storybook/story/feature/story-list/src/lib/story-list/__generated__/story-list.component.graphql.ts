import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryListYourInfiniteStorybookStoryUiStoryListFragmentDoc } from '../../../../../../ui/story-list/src/lib/story-list/__generated__/story-list.component.graphql';

export type GetStoriesOnStoryListYourInfiniteStorybookStoryFeatureStoryListQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        where?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<YourInfiniteStorybookGraphQlClientTypes.StoriesWhereInput>;
    }>;

export type GetStoriesOnStoryListYourInfiniteStorybookStoryFeatureStoryListQuery =
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

export type StoryOnStoryListYourInfiniteStorybookStoryFeatureStoryListFragment =
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

export const StoryOnStoryListYourInfiniteStorybookStoryFeatureStoryListFragmentDoc = gql`
    fragment StoryOnStoryListYourInfiniteStorybookStoryFeatureStoryList on Story {
        ...StoryOnStoryListYourInfiniteStorybookStoryUiStoryList
    }
    ${StoryOnStoryListYourInfiniteStorybookStoryUiStoryListFragmentDoc}
`;
export const GetStoriesOnStoryListYourInfiniteStorybookStoryFeatureStoryListDocument = gql`
    query GetStoriesOnStoryListYourInfiniteStorybookStoryFeatureStoryList(
        $where: StoriesWhereInput
    ) {
        stories(where: $where) {
            ...StoryOnStoryListYourInfiniteStorybookStoryFeatureStoryList
        }
    }
    ${StoryOnStoryListYourInfiniteStorybookStoryFeatureStoryListFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoriesOnStoryListYourInfiniteStorybookStoryFeatureStoryListGQL extends Apollo.Query<
    GetStoriesOnStoryListYourInfiniteStorybookStoryFeatureStoryListQuery,
    GetStoriesOnStoryListYourInfiniteStorybookStoryFeatureStoryListQueryVariables
> {
    override document =
        GetStoriesOnStoryListYourInfiniteStorybookStoryFeatureStoryListDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
