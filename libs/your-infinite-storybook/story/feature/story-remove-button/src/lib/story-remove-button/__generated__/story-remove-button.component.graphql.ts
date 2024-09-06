import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryRemoveButtonYourInfiniteStorybookStoryUiStoryRemoveButtonFragmentDoc } from '../../../../../../ui/story-remove-button/src/lib/story-remove-button/__generated__/story-remove-button.component.graphql';

export type GetStoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        storyId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetStoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonQuery =
    {
        __typename?: 'Query';
        story?: { __typename?: 'Story'; id?: string | null } | null;
    };

export type StoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonFragment =
    { __typename?: 'Story'; id?: string | null };

export const StoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonFragmentDoc = gql`
    fragment StoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButton on Story {
        ...StoryOnStoryRemoveButtonYourInfiniteStorybookStoryUiStoryRemoveButton
    }
    ${StoryOnStoryRemoveButtonYourInfiniteStorybookStoryUiStoryRemoveButtonFragmentDoc}
`;
export const GetStoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonDocument = gql`
    query GetStoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButton(
        $storyId: ID!
    ) {
        story(id: $storyId) {
            ...StoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButton
        }
    }
    ${StoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonGQL extends Apollo.Query<
    GetStoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonQuery,
    GetStoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonQueryVariables
> {
    override document =
        GetStoryOnStoryRemoveButtonYourInfiniteStorybookStoryFeatureStoryRemoveButtonDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
