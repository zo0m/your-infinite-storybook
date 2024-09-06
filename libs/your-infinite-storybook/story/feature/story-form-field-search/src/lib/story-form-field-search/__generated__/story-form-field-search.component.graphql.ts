import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryUiStoryFormFieldSearchFragmentDoc } from '../../../../../../ui/story-form-field-search/src/lib/story-form-field-search/__generated__/story-form-field-search.component.graphql';

export type GetStoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        storyId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetStoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchQuery =
    {
        __typename?: 'Query';
        story?: { __typename?: 'Story'; id?: string | null } | null;
    };

export type SearchStoriesOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        search?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<
            YourInfiniteStorybookGraphQlClientTypes.Scalars['String']
        >;
    }>;

export type SearchStoriesOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchQuery =
    {
        __typename?: 'Query';
        storiesSearch: Array<{ __typename?: 'Story'; id?: string | null }>;
    };

export type StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchFragment =
    { __typename?: 'Story'; id?: string | null };

export const StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchFragmentDoc = gql`
    fragment StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearch on Story {
        ...StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryUiStoryFormFieldSearch
    }
    ${StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryUiStoryFormFieldSearchFragmentDoc}
`;
export const GetStoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchDocument = gql`
    query GetStoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearch(
        $storyId: ID!
    ) {
        story(id: $storyId) {
            ...StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearch
        }
    }
    ${StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchGQL extends Apollo.Query<
    GetStoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchQuery,
    GetStoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchQueryVariables
> {
    override document =
        GetStoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const SearchStoriesOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchDocument = gql`
    query SearchStoriesOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearch(
        $search: String
    ) {
        storiesSearch(search: $search) {
            ...StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearch
        }
    }
    ${StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class SearchStoriesOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchGQL extends Apollo.Query<
    SearchStoriesOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchQuery,
    SearchStoriesOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchQueryVariables
> {
    override document =
        SearchStoriesOnStoryFormFieldSearchYourInfiniteStorybookStoryFeatureStoryFormFieldSearchDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
