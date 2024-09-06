import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageViewCardYourInfiniteStorybookMessageUiMessageViewCardFragmentDoc } from '../../../../../../ui/message-view-card/src/lib/message-view-card/__generated__/message-view-card.component.graphql';

export type GetMessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        messageId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetMessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardQuery =
    {
        __typename?: 'Query';
        message?: {
            __typename?: 'Message';
            id?: string | null;
            createdAt: any;
            updatedAt: any;
            role?: string | null;
            content?: string | null;
            storyId?: string | null;
        } | null;
    };

export type MessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardFragment =
    {
        __typename?: 'Message';
        id?: string | null;
        createdAt: any;
        updatedAt: any;
        role?: string | null;
        content?: string | null;
        storyId?: string | null;
    };

export const MessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardFragmentDoc = gql`
    fragment MessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCard on Message {
        ...MessageOnMessageViewCardYourInfiniteStorybookMessageUiMessageViewCard
    }
    ${MessageOnMessageViewCardYourInfiniteStorybookMessageUiMessageViewCardFragmentDoc}
`;
export const GetMessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardDocument = gql`
    query GetMessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCard(
        $messageId: ID!
    ) {
        message(id: $messageId) {
            ...MessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCard
        }
    }
    ${MessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardGQL extends Apollo.Query<
    GetMessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardQuery,
    GetMessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardQueryVariables
> {
    override document =
        GetMessageOnMessageViewCardYourInfiniteStorybookMessageFeatureMessageViewCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
