import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryCreateButtonYourInfiniteStorybookStoryUiStoryCreateButtonFragmentDoc } from '../../../../../../ui/story-create-button/src/lib/story-create-button/__generated__/story-create-button.component.graphql';

export type GetStoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        storyId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetStoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonQuery =
    {
        __typename?: 'Query';
        story?: { __typename?: 'Story'; id?: string | null } | null;
    };

export type StoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonFragment =
    { __typename?: 'Story'; id?: string | null };

export const StoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonFragmentDoc = gql`
    fragment StoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButton on Story {
        ...StoryOnStoryCreateButtonYourInfiniteStorybookStoryUiStoryCreateButton
    }
    ${StoryOnStoryCreateButtonYourInfiniteStorybookStoryUiStoryCreateButtonFragmentDoc}
`;
export const GetStoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonDocument = gql`
    query GetStoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButton(
        $storyId: ID!
    ) {
        story(id: $storyId) {
            ...StoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButton
        }
    }
    ${StoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonGQL extends Apollo.Query<
    GetStoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonQuery,
    GetStoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonQueryVariables
> {
    override document =
        GetStoryOnStoryCreateButtonYourInfiniteStorybookStoryFeatureStoryCreateButtonDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
