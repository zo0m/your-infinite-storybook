import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageGridYourInfiniteStorybookMessageUiMessageGridFragmentDoc } from '../../../../../../ui/message-grid/src/lib/message-grid/__generated__/message-grid.component.graphql';

export type GetMessagesOnMessageGridYourInfiniteStorybookMessageFeatureMessageGridQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        where?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<YourInfiniteStorybookGraphQlClientTypes.MessagesWhereInput>;
    }>;

export type GetMessagesOnMessageGridYourInfiniteStorybookMessageFeatureMessageGridQuery =
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

export type MessageOnMessageGridYourInfiniteStorybookMessageFeatureMessageGridFragment =
    {
        __typename?: 'Message';
        id?: string | null;
        createdAt: any;
        updatedAt: any;
        role?: string | null;
        content?: string | null;
        storyId?: string | null;
    };

export const MessageOnMessageGridYourInfiniteStorybookMessageFeatureMessageGridFragmentDoc = gql`
    fragment MessageOnMessageGridYourInfiniteStorybookMessageFeatureMessageGrid on Message {
        ...MessageOnMessageGridYourInfiniteStorybookMessageUiMessageGrid
    }
    ${MessageOnMessageGridYourInfiniteStorybookMessageUiMessageGridFragmentDoc}
`;
export const GetMessagesOnMessageGridYourInfiniteStorybookMessageFeatureMessageGridDocument = gql`
    query GetMessagesOnMessageGridYourInfiniteStorybookMessageFeatureMessageGrid(
        $where: MessagesWhereInput
    ) {
        messages(where: $where) {
            ...MessageOnMessageGridYourInfiniteStorybookMessageFeatureMessageGrid
        }
    }
    ${MessageOnMessageGridYourInfiniteStorybookMessageFeatureMessageGridFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessagesOnMessageGridYourInfiniteStorybookMessageFeatureMessageGridGQL extends Apollo.Query<
    GetMessagesOnMessageGridYourInfiniteStorybookMessageFeatureMessageGridQuery,
    GetMessagesOnMessageGridYourInfiniteStorybookMessageFeatureMessageGridQueryVariables
> {
    override document =
        GetMessagesOnMessageGridYourInfiniteStorybookMessageFeatureMessageGridDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
