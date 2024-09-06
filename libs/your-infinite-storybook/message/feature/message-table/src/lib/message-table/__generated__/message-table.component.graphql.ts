import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageTableYourInfiniteStorybookMessageUiMessageTableFragmentDoc } from '../../../../../../ui/message-table/src/lib/message-table/__generated__/message-table.component.graphql';

export type GetMessagesOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        where?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<YourInfiniteStorybookGraphQlClientTypes.MessagesWhereInput>;
    }>;

export type GetMessagesOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableQuery =
    {
        __typename?: 'Query';
        messages: Array<{
            __typename?: 'Message';
            id?: string | null;
            createdAt: any;
            updatedAt: any;
            role?: string | null;
            content?: string | null;
            storyId?: string | null;
        }>;
    };

export type MessageOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableFragment =
    {
        __typename?: 'Message';
        id?: string | null;
        createdAt: any;
        updatedAt: any;
        role?: string | null;
        content?: string | null;
        storyId?: string | null;
    };

export const MessageOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableFragmentDoc = gql`
    fragment MessageOnMessageTableYourInfiniteStorybookMessageFeatureMessageTable on Message {
        ...MessageOnMessageTableYourInfiniteStorybookMessageUiMessageTable
    }
    ${MessageOnMessageTableYourInfiniteStorybookMessageUiMessageTableFragmentDoc}
`;
export const GetMessagesOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableDocument = gql`
    query GetMessagesOnMessageTableYourInfiniteStorybookMessageFeatureMessageTable(
        $where: MessagesWhereInput
    ) {
        messages(where: $where) {
            ...MessageOnMessageTableYourInfiniteStorybookMessageFeatureMessageTable
        }
    }
    ${MessageOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessagesOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableGQL extends Apollo.Query<
    GetMessagesOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableQuery,
    GetMessagesOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableQueryVariables
> {
    override document =
        GetMessagesOnMessageTableYourInfiniteStorybookMessageFeatureMessageTableDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
