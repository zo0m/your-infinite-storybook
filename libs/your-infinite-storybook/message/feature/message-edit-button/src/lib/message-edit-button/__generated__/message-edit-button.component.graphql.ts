import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageEditButtonYourInfiniteStorybookMessageUiMessageEditButtonFragmentDoc } from '../../../../../../ui/message-edit-button/src/lib/message-edit-button/__generated__/message-edit-button.component.graphql';

export type GetMessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButtonQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        messageId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetMessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButtonQuery =
    {
        __typename?: 'Query';
        message?: { __typename?: 'Message'; id?: string | null } | null;
    };

export type MessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButtonFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButtonFragmentDoc = gql`
    fragment MessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButton on Message {
        ...MessageOnMessageEditButtonYourInfiniteStorybookMessageUiMessageEditButton
    }
    ${MessageOnMessageEditButtonYourInfiniteStorybookMessageUiMessageEditButtonFragmentDoc}
`;
export const GetMessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButtonDocument = gql`
    query GetMessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButton(
        $messageId: ID!
    ) {
        message(id: $messageId) {
            ...MessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButton
        }
    }
    ${MessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButtonFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButtonGQL extends Apollo.Query<
    GetMessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButtonQuery,
    GetMessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButtonQueryVariables
> {
    override document =
        GetMessageOnMessageEditButtonYourInfiniteStorybookMessageFeatureMessageEditButtonDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
