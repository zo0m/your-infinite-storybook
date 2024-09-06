import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageLinkYourInfiniteStorybookMessageUiMessageLinkFragmentDoc } from '../../../../../../ui/message-link/src/lib/message-link/__generated__/message-link.component.graphql';

export type GetMessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLinkQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        messageId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetMessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLinkQuery =
    {
        __typename?: 'Query';
        message?: { __typename?: 'Message'; id?: string | null } | null;
    };

export type MessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLinkFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLinkFragmentDoc = gql`
    fragment MessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLink on Message {
        ...MessageOnMessageLinkYourInfiniteStorybookMessageUiMessageLink
    }
    ${MessageOnMessageLinkYourInfiniteStorybookMessageUiMessageLinkFragmentDoc}
`;
export const GetMessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLinkDocument = gql`
    query GetMessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLink(
        $messageId: ID!
    ) {
        message(id: $messageId) {
            ...MessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLink
        }
    }
    ${MessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLinkFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLinkGQL extends Apollo.Query<
    GetMessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLinkQuery,
    GetMessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLinkQueryVariables
> {
    override document =
        GetMessageOnMessageLinkYourInfiniteStorybookMessageFeatureMessageLinkDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
