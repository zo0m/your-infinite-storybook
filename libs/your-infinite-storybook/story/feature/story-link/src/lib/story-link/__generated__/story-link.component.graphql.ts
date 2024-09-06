import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryLinkYourInfiniteStorybookStoryUiStoryLinkFragmentDoc } from '../../../../../../ui/story-link/src/lib/story-link/__generated__/story-link.component.graphql';

export type GetStoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLinkQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        storyId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetStoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLinkQuery =
    {
        __typename?: 'Query';
        story?: { __typename?: 'Story'; id?: string | null } | null;
    };

export type StoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLinkFragment =
    { __typename?: 'Story'; id?: string | null };

export const StoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLinkFragmentDoc = gql`
    fragment StoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLink on Story {
        ...StoryOnStoryLinkYourInfiniteStorybookStoryUiStoryLink
    }
    ${StoryOnStoryLinkYourInfiniteStorybookStoryUiStoryLinkFragmentDoc}
`;
export const GetStoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLinkDocument = gql`
    query GetStoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLink(
        $storyId: ID!
    ) {
        story(id: $storyId) {
            ...StoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLink
        }
    }
    ${StoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLinkFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLinkGQL extends Apollo.Query<
    GetStoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLinkQuery,
    GetStoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLinkQueryVariables
> {
    override document =
        GetStoryOnStoryLinkYourInfiniteStorybookStoryFeatureStoryLinkDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
