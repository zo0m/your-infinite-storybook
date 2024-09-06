import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageUiMessageFormFieldSearchFragmentDoc } from '../../../../../../ui/message-form-field-search/src/lib/message-form-field-search/__generated__/message-form-field-search.component.graphql';

export type GetMessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        messageId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetMessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchQuery =
    {
        __typename?: 'Query';
        message?: { __typename?: 'Message'; id?: string | null } | null;
    };

export type SearchMessagesOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        search?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<
            YourInfiniteStorybookGraphQlClientTypes.Scalars['String']
        >;
    }>;

export type SearchMessagesOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchQuery =
    {
        __typename?: 'Query';
        messagesSearch: Array<{ __typename?: 'Message'; id?: string | null }>;
    };

export type MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchFragmentDoc = gql`
    fragment MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearch on Message {
        ...MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageUiMessageFormFieldSearch
    }
    ${MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageUiMessageFormFieldSearchFragmentDoc}
`;
export const GetMessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchDocument = gql`
    query GetMessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearch(
        $messageId: ID!
    ) {
        message(id: $messageId) {
            ...MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearch
        }
    }
    ${MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchGQL extends Apollo.Query<
    GetMessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchQuery,
    GetMessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchQueryVariables
> {
    override document =
        GetMessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const SearchMessagesOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchDocument = gql`
    query SearchMessagesOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearch(
        $search: String
    ) {
        messagesSearch(search: $search) {
            ...MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearch
        }
    }
    ${MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class SearchMessagesOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchGQL extends Apollo.Query<
    SearchMessagesOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchQuery,
    SearchMessagesOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchQueryVariables
> {
    override document =
        SearchMessagesOnMessageFormFieldSearchYourInfiniteStorybookMessageFeatureMessageFormFieldSearchDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
