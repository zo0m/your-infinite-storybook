import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryFormFieldSelectYourInfiniteStorybookStoryUiStoryFormFieldSelectFragmentDoc } from '../../../../../../ui/story-form-field-select/src/lib/story-form-field-select/__generated__/story-form-field-select.component.graphql';

export type GetStoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        storyId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetStoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectQuery =
    {
        __typename?: 'Query';
        story?: { __typename?: 'Story'; id?: string | null } | null;
    };

export type SearchStoriesOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        search?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<
            YourInfiniteStorybookGraphQlClientTypes.Scalars['String']
        >;
    }>;

export type SearchStoriesOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectQuery =
    {
        __typename?: 'Query';
        storiesSearch: Array<{ __typename?: 'Story'; id?: string | null }>;
    };

export type StoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectFragment =
    { __typename?: 'Story'; id?: string | null };

export const StoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectFragmentDoc = gql`
    fragment StoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelect on Story {
        ...StoryOnStoryFormFieldSelectYourInfiniteStorybookStoryUiStoryFormFieldSelect
    }
    ${StoryOnStoryFormFieldSelectYourInfiniteStorybookStoryUiStoryFormFieldSelectFragmentDoc}
`;
export const GetStoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectDocument = gql`
    query GetStoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelect(
        $storyId: ID!
    ) {
        story(id: $storyId) {
            ...StoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelect
        }
    }
    ${StoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectGQL extends Apollo.Query<
    GetStoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectQuery,
    GetStoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectQueryVariables
> {
    override document =
        GetStoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const SearchStoriesOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectDocument = gql`
    query SearchStoriesOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelect(
        $search: String
    ) {
        storiesSearch(search: $search) {
            ...StoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelect
        }
    }
    ${StoryOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class SearchStoriesOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectGQL extends Apollo.Query<
    SearchStoriesOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectQuery,
    SearchStoriesOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectQueryVariables
> {
    override document =
        SearchStoriesOnStoryFormFieldSelectYourInfiniteStorybookStoryFeatureStoryFormFieldSelectDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
