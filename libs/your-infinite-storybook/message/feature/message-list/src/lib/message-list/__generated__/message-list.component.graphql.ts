import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageListYourInfiniteStorybookMessageUiMessageListFragmentDoc } from '../../../../../../ui/message-list/src/lib/message-list/__generated__/message-list.component.graphql';

export type GetMessagesOnMessageListYourInfiniteStorybookMessageFeatureMessageListQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        where?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<YourInfiniteStorybookGraphQlClientTypes.MessagesWhereInput>;
    }>;

export type GetMessagesOnMessageListYourInfiniteStorybookMessageFeatureMessageListQuery =
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
            story: {
                __typename?: 'Story';
                id?: string | null;
                title?: string | null;
            };
        }>;
    };

export type MessageOnMessageListYourInfiniteStorybookMessageFeatureMessageListFragment =
    {
        __typename?: 'Message';
        id?: string | null;
        createdAt: any;
        updatedAt: any;
        role?: string | null;
        content?: string | null;
        storyId?: string | null;
        story: {
            __typename?: 'Story';
            id?: string | null;
            title?: string | null;
        };
    };

export const MessageOnMessageListYourInfiniteStorybookMessageFeatureMessageListFragmentDoc = gql`
    fragment MessageOnMessageListYourInfiniteStorybookMessageFeatureMessageList on Message {
        ...MessageOnMessageListYourInfiniteStorybookMessageUiMessageList
    }
    ${MessageOnMessageListYourInfiniteStorybookMessageUiMessageListFragmentDoc}
`;
export const GetMessagesOnMessageListYourInfiniteStorybookMessageFeatureMessageListDocument = gql`
    query GetMessagesOnMessageListYourInfiniteStorybookMessageFeatureMessageList(
        $where: MessagesWhereInput
    ) {
        messages(where: $where) {
            ...MessageOnMessageListYourInfiniteStorybookMessageFeatureMessageList
        }
    }
    ${MessageOnMessageListYourInfiniteStorybookMessageFeatureMessageListFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessagesOnMessageListYourInfiniteStorybookMessageFeatureMessageListGQL extends Apollo.Query<
    GetMessagesOnMessageListYourInfiniteStorybookMessageFeatureMessageListQuery,
    GetMessagesOnMessageListYourInfiniteStorybookMessageFeatureMessageListQueryVariables
> {
    override document =
        GetMessagesOnMessageListYourInfiniteStorybookMessageFeatureMessageListDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
