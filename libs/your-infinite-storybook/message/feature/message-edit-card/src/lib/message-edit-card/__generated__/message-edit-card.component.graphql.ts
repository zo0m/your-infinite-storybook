import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageEditCardYourInfiniteStorybookMessageUiMessageEditCardFragmentDoc } from '../../../../../../ui/message-edit-card/src/lib/message-edit-card/__generated__/message-edit-card.component.graphql';

export type GetMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        messageId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardQuery =
    {
        __typename?: 'Query';
        message?: {
            __typename?: 'Message';
            id?: string | null;
            role?: string | null;
            content?: string | null;
            storyId?: string | null;
        } | null;
    };

export type EditMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardMutationVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        message: YourInfiniteStorybookGraphQlClientTypes.UpdateMessageInput;
    }>;

export type EditMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardMutation =
    {
        __typename?: 'Mutation';
        messagesUpdate: Array<{
            __typename?: 'Message';
            id?: string | null;
            role?: string | null;
            content?: string | null;
            storyId?: string | null;
        }>;
    };

export type DeleteMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardMutationVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        messageId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type DeleteMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardMutation =
    {
        __typename?: 'Mutation';
        messagesDelete: Array<{ __typename?: 'Message'; id?: string | null }>;
    };

export type MessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardFragment =
    {
        __typename?: 'Message';
        id?: string | null;
        role?: string | null;
        content?: string | null;
        storyId?: string | null;
    };

export const MessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardFragmentDoc = gql`
    fragment MessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCard on Message {
        ...MessageOnMessageEditCardYourInfiniteStorybookMessageUiMessageEditCard
    }
    ${MessageOnMessageEditCardYourInfiniteStorybookMessageUiMessageEditCardFragmentDoc}
`;
export const GetMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardDocument = gql`
    query GetMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCard(
        $messageId: ID!
    ) {
        message(id: $messageId) {
            ...MessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCard
        }
    }
    ${MessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardGQL extends Apollo.Query<
    GetMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardQuery,
    GetMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardQueryVariables
> {
    override document =
        GetMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const EditMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardDocument = gql`
    mutation EditMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCard(
        $message: UpdateMessageInput!
    ) {
        messagesUpdate(messages: [$message]) {
            ...MessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCard
        }
    }
    ${MessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class EditMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardGQL extends Apollo.Mutation<
    EditMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardMutation,
    EditMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardMutationVariables
> {
    override document =
        EditMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const DeleteMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardDocument = gql`
    mutation DeleteMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCard(
        $messageId: ID!
    ) {
        messagesDelete(ids: [$messageId]) {
            id
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class DeleteMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardGQL extends Apollo.Mutation<
    DeleteMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardMutation,
    DeleteMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardMutationVariables
> {
    override document =
        DeleteMessageOnMessageEditCardYourInfiniteStorybookMessageFeatureMessageEditCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
