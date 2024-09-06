import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageInlineListYourInfiniteStorybookMessageUiMessageInlineListFragmentDoc } from '../../../../../../ui/message-inline-list/src/lib/message-inline-list/__generated__/message-inline-list.component.graphql';

export type GetMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        where?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<YourInfiniteStorybookGraphQlClientTypes.MessagesWhereInput>;
    }>;

export type GetMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListQuery =
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

export type SubscribeOnNewMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListSubscriptionVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        storyId: YourInfiniteStorybookGraphQlClientTypes.Scalars['String'];
    }>;

export type SubscribeOnNewMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListSubscription =
    {
        __typename?: 'Subscription';
        newStoryMessageWord?: {
            __typename?: 'StoryMessageWord';
            storyId?: string | null;
            word?: string | null;
        } | null;
    };

export type MessageOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListFragment =
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

export const MessageOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListFragmentDoc = gql`
    fragment MessageOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineList on Message {
        ...MessageOnMessageInlineListYourInfiniteStorybookMessageUiMessageInlineList
    }
    ${MessageOnMessageInlineListYourInfiniteStorybookMessageUiMessageInlineListFragmentDoc}
`;
export const GetMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListDocument = gql`
    query GetMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineList(
        $where: MessagesWhereInput
    ) {
        messages(where: $where) {
            ...MessageOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineList
        }
    }
    ${MessageOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListGQL extends Apollo.Query<
    GetMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListQuery,
    GetMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListQueryVariables
> {
    override document =
        GetMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const SubscribeOnNewMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListDocument = gql`
    subscription SubscribeOnNewMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineList(
        $storyId: String!
    ) {
        newStoryMessageWord(storyId: $storyId) {
            storyId
            word
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class SubscribeOnNewMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListGQL extends Apollo.Subscription<
    SubscribeOnNewMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListSubscription,
    SubscribeOnNewMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListSubscriptionVariables
> {
    override document =
        SubscribeOnNewMessagesOnMessageInlineListYourInfiniteStorybookMessageFeatureMessageInlineListDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
