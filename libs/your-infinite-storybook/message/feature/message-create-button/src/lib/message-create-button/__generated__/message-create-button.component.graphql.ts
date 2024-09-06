import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageCreateButtonYourInfiniteStorybookMessageUiMessageCreateButtonFragmentDoc } from '../../../../../../ui/message-create-button/src/lib/message-create-button/__generated__/message-create-button.component.graphql';

export type GetMessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButtonQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        messageId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetMessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButtonQuery =
    {
        __typename?: 'Query';
        message?: { __typename?: 'Message'; id?: string | null } | null;
    };

export type MessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButtonFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButtonFragmentDoc = gql`
    fragment MessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButton on Message {
        ...MessageOnMessageCreateButtonYourInfiniteStorybookMessageUiMessageCreateButton
    }
    ${MessageOnMessageCreateButtonYourInfiniteStorybookMessageUiMessageCreateButtonFragmentDoc}
`;
export const GetMessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButtonDocument = gql`
    query GetMessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButton(
        $messageId: ID!
    ) {
        message(id: $messageId) {
            ...MessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButton
        }
    }
    ${MessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButtonFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButtonGQL extends Apollo.Query<
    GetMessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButtonQuery,
    GetMessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButtonQueryVariables
> {
    override document =
        GetMessageOnMessageCreateButtonYourInfiniteStorybookMessageFeatureMessageCreateButtonDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
