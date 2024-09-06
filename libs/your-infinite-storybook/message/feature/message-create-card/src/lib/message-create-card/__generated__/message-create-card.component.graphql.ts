import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type CreateMessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCardMutationVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        message: YourInfiniteStorybookGraphQlClientTypes.CreateMessageInput;
    }>;

export type CreateMessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCardMutation =
    {
        __typename?: 'Mutation';
        messagesCreate: Array<{
            __typename?: 'Message';
            id?: string | null;
            role?: string | null;
            content?: string | null;
            storyId?: string | null;
        }>;
    };

export type MessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCardFragment =
    {
        __typename?: 'Message';
        id?: string | null;
        role?: string | null;
        content?: string | null;
        storyId?: string | null;
    };

export const MessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCardFragmentDoc = gql`
    fragment MessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCard on Message {
        id
        role
        content
        storyId
    }
`;
export const CreateMessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCardDocument = gql`
    mutation CreateMessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCard(
        $message: CreateMessageInput!
    ) {
        messagesCreate(messages: [$message]) {
            ...MessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCard
        }
    }
    ${MessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class CreateMessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCardGQL extends Apollo.Mutation<
    CreateMessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCardMutation,
    CreateMessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCardMutationVariables
> {
    override document =
        CreateMessageOnMessageCreateCardYourInfiniteStorybookMessageFeatureMessageCreateCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
