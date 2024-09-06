import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryViewCardYourInfiniteStorybookStoryUiStoryViewCardFragmentDoc } from '../../../../../../ui/story-view-card/src/lib/story-view-card/__generated__/story-view-card.component.graphql';

export type GetStoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        storyId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetStoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardQuery =
    {
        __typename?: 'Query';
        story?: {
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
        } | null;
    };

export type StoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardFragment =
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

export const StoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardFragmentDoc = gql`
    fragment StoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCard on Story {
        ...StoryOnStoryViewCardYourInfiniteStorybookStoryUiStoryViewCard
    }
    ${StoryOnStoryViewCardYourInfiniteStorybookStoryUiStoryViewCardFragmentDoc}
`;
export const GetStoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardDocument = gql`
    query GetStoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCard(
        $storyId: ID!
    ) {
        story(id: $storyId) {
            ...StoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCard
        }
    }
    ${StoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardGQL extends Apollo.Query<
    GetStoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardQuery,
    GetStoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardQueryVariables
> {
    override document =
        GetStoryOnStoryViewCardYourInfiniteStorybookStoryFeatureStoryViewCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
