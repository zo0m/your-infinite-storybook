import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type CreateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardMutationVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        story: YourInfiniteStorybookGraphQlClientTypes.CreateStoryInput;
    }>;

export type CreateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardMutation =
    {
        __typename?: 'Mutation';
        storiesCreate: Array<{
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

export type GenerateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardMutationVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        story: YourInfiniteStorybookGraphQlClientTypes.CreateStoryInput;
    }>;

export type GenerateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardMutation =
    {
        __typename?: 'Mutation';
        storyGenerate: {
            __typename?: 'Story';
            id?: string | null;
            title?: string | null;
            description?: string | null;
            lesson?: string | null;
            setting?: string | null;
            childName?: string | null;
            childAge?: number | null;
            messages: Array<{
                __typename?: 'Message';
                id?: string | null;
                storyId?: string | null;
                role?: string | null;
                content?: string | null;
                story: { __typename?: 'Story'; id?: string | null };
            }>;
        };
    };

export type StoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardFragment =
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

export const StoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardFragmentDoc = gql`
    fragment StoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCard on Story {
        id
        title
        description
        lesson
        setting
        childName
        childAge
    }
`;
export const CreateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardDocument = gql`
    mutation CreateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCard(
        $story: CreateStoryInput!
    ) {
        storiesCreate(stories: [$story]) {
            ...StoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCard
        }
    }
    ${StoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class CreateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardGQL extends Apollo.Mutation<
    CreateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardMutation,
    CreateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardMutationVariables
> {
    override document =
        CreateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GenerateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardDocument = gql`
    mutation GenerateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCard(
        $story: CreateStoryInput!
    ) {
        storyGenerate(story: $story) {
            ...StoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCard
            messages {
                id
                storyId
                role
                content
                story {
                    id
                }
            }
        }
    }
    ${StoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GenerateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardGQL extends Apollo.Mutation<
    GenerateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardMutation,
    GenerateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardMutationVariables
> {
    override document =
        GenerateStoryOnStoryCreateCardYourInfiniteStorybookStoryFeatureStoryCreateCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
