import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageFormFieldSelectYourInfiniteStorybookMessageUiMessageFormFieldSelectFragmentDoc } from '../../../../../../ui/message-form-field-select/src/lib/message-form-field-select/__generated__/message-form-field-select.component.graphql';

export type GetMessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        messageId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetMessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectQuery =
    {
        __typename?: 'Query';
        message?: { __typename?: 'Message'; id?: string | null } | null;
    };

export type SearchMessagesOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        search?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<
            YourInfiniteStorybookGraphQlClientTypes.Scalars['String']
        >;
    }>;

export type SearchMessagesOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectQuery =
    {
        __typename?: 'Query';
        messagesSearch: Array<{ __typename?: 'Message'; id?: string | null }>;
    };

export type MessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectFragmentDoc = gql`
    fragment MessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelect on Message {
        ...MessageOnMessageFormFieldSelectYourInfiniteStorybookMessageUiMessageFormFieldSelect
    }
    ${MessageOnMessageFormFieldSelectYourInfiniteStorybookMessageUiMessageFormFieldSelectFragmentDoc}
`;
export const GetMessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectDocument = gql`
    query GetMessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelect(
        $messageId: ID!
    ) {
        message(id: $messageId) {
            ...MessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelect
        }
    }
    ${MessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectGQL extends Apollo.Query<
    GetMessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectQuery,
    GetMessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectQueryVariables
> {
    override document =
        GetMessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const SearchMessagesOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectDocument = gql`
    query SearchMessagesOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelect(
        $search: String
    ) {
        messagesSearch(search: $search) {
            ...MessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelect
        }
    }
    ${MessageOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class SearchMessagesOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectGQL extends Apollo.Query<
    SearchMessagesOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectQuery,
    SearchMessagesOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectQueryVariables
> {
    override document =
        SearchMessagesOnMessageFormFieldSelectYourInfiniteStorybookMessageFeatureMessageFormFieldSelectDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
