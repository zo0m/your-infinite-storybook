import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageRemoveButtonYourInfiniteStorybookMessageUiMessageRemoveButtonFragmentDoc } from '../../../../../../ui/message-remove-button/src/lib/message-remove-button/__generated__/message-remove-button.component.graphql';

export type GetMessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButtonQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        messageId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetMessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButtonQuery =
    {
        __typename?: 'Query';
        message?: { __typename?: 'Message'; id?: string | null } | null;
    };

export type MessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButtonFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButtonFragmentDoc = gql`
    fragment MessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButton on Message {
        ...MessageOnMessageRemoveButtonYourInfiniteStorybookMessageUiMessageRemoveButton
    }
    ${MessageOnMessageRemoveButtonYourInfiniteStorybookMessageUiMessageRemoveButtonFragmentDoc}
`;
export const GetMessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButtonDocument = gql`
    query GetMessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButton(
        $messageId: ID!
    ) {
        message(id: $messageId) {
            ...MessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButton
        }
    }
    ${MessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButtonFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButtonGQL extends Apollo.Query<
    GetMessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButtonQuery,
    GetMessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButtonQueryVariables
> {
    override document =
        GetMessageOnMessageRemoveButtonYourInfiniteStorybookMessageFeatureMessageRemoveButtonDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
