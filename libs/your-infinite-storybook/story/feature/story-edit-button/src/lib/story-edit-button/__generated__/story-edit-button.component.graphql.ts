import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryEditButtonYourInfiniteStorybookStoryUiStoryEditButtonFragmentDoc } from '../../../../../../ui/story-edit-button/src/lib/story-edit-button/__generated__/story-edit-button.component.graphql';

export type GetStoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButtonQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        storyId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetStoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButtonQuery =
    {
        __typename?: 'Query';
        story?: { __typename?: 'Story'; id?: string | null } | null;
    };

export type StoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButtonFragment =
    { __typename?: 'Story'; id?: string | null };

export const StoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButtonFragmentDoc = gql`
    fragment StoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButton on Story {
        ...StoryOnStoryEditButtonYourInfiniteStorybookStoryUiStoryEditButton
    }
    ${StoryOnStoryEditButtonYourInfiniteStorybookStoryUiStoryEditButtonFragmentDoc}
`;
export const GetStoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButtonDocument = gql`
    query GetStoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButton(
        $storyId: ID!
    ) {
        story(id: $storyId) {
            ...StoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButton
        }
    }
    ${StoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButtonFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButtonGQL extends Apollo.Query<
    GetStoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButtonQuery,
    GetStoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButtonQueryVariables
> {
    override document =
        GetStoryOnStoryEditButtonYourInfiniteStorybookStoryFeatureStoryEditButtonDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
