import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryTableYourInfiniteStorybookStoryUiStoryTableFragmentDoc } from '../../../../../../ui/story-table/src/lib/story-table/__generated__/story-table.component.graphql';

export type GetStoriesOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        where?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<YourInfiniteStorybookGraphQlClientTypes.StoriesWhereInput>;
    }>;

export type GetStoriesOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableQuery =
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

export type StoryOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableFragment =
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

export const StoryOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableFragmentDoc = gql`
    fragment StoryOnStoryTableYourInfiniteStorybookStoryFeatureStoryTable on Story {
        ...StoryOnStoryTableYourInfiniteStorybookStoryUiStoryTable
    }
    ${StoryOnStoryTableYourInfiniteStorybookStoryUiStoryTableFragmentDoc}
`;
export const GetStoriesOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableDocument = gql`
    query GetStoriesOnStoryTableYourInfiniteStorybookStoryFeatureStoryTable(
        $where: StoriesWhereInput
    ) {
        stories(where: $where) {
            ...StoryOnStoryTableYourInfiniteStorybookStoryFeatureStoryTable
        }
    }
    ${StoryOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoriesOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableGQL extends Apollo.Query<
    GetStoriesOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableQuery,
    GetStoriesOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableQueryVariables
> {
    override document =
        GetStoriesOnStoryTableYourInfiniteStorybookStoryFeatureStoryTableDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
