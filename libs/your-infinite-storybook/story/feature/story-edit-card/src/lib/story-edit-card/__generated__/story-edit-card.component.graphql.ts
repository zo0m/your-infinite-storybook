import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryEditCardYourInfiniteStorybookStoryUiStoryEditCardFragmentDoc } from '../../../../../../ui/story-edit-card/src/lib/story-edit-card/__generated__/story-edit-card.component.graphql';

export type GetStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        storyId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardQuery =
    {
        __typename?: 'Query';
        story?: {
            __typename?: 'Story';
            id?: string | null;
            title?: string | null;
            description?: string | null;
            lesson?: string | null;
            setting?: string | null;
            childName?: string | null;
            childAge?: number | null;
        } | null;
    };

export type EditStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardMutationVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        story: YourInfiniteStorybookGraphQlClientTypes.UpdateStoryInput;
    }>;

export type EditStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardMutation =
    {
        __typename?: 'Mutation';
        storiesUpdate: Array<{
            __typename?: 'Story';
            id?: string | null;
            title?: string | null;
            description?: string | null;
            lesson?: string | null;
            setting?: string | null;
            childName?: string | null;
            childAge?: number | null;
        }>;
    };

export type DeleteStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardMutationVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        storyId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type DeleteStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardMutation =
    {
        __typename?: 'Mutation';
        storiesDelete: Array<{ __typename?: 'Story'; id?: string | null }>;
    };

export type StoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardFragment =
    {
        __typename?: 'Story';
        id?: string | null;
        title?: string | null;
        description?: string | null;
        lesson?: string | null;
        setting?: string | null;
        childName?: string | null;
        childAge?: number | null;
    };

export const StoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardFragmentDoc = gql`
    fragment StoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCard on Story {
        ...StoryOnStoryEditCardYourInfiniteStorybookStoryUiStoryEditCard
    }
    ${StoryOnStoryEditCardYourInfiniteStorybookStoryUiStoryEditCardFragmentDoc}
`;
export const GetStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardDocument = gql`
    query GetStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCard(
        $storyId: ID!
    ) {
        story(id: $storyId) {
            ...StoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCard
        }
    }
    ${StoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardGQL extends Apollo.Query<
    GetStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardQuery,
    GetStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardQueryVariables
> {
    override document =
        GetStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const EditStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardDocument = gql`
    mutation EditStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCard(
        $story: UpdateStoryInput!
    ) {
        storiesUpdate(stories: [$story]) {
            ...StoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCard
        }
    }
    ${StoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class EditStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardGQL extends Apollo.Mutation<
    EditStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardMutation,
    EditStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardMutationVariables
> {
    override document =
        EditStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const DeleteStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardDocument = gql`
    mutation DeleteStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCard(
        $storyId: ID!
    ) {
        storiesDelete(ids: [$storyId]) {
            id
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class DeleteStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardGQL extends Apollo.Mutation<
    DeleteStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardMutation,
    DeleteStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardMutationVariables
> {
    override document =
        DeleteStoryOnStoryEditCardYourInfiniteStorybookStoryFeatureStoryEditCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
