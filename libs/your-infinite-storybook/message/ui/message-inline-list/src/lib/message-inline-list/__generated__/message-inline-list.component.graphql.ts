import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageListItemYourInfiniteStorybookMessageUiMessageListItemFragmentDoc } from '../../../../../message-list-item/src/lib/message-list-item/__generated__/message-list-item.component.graphql';

export type MessageOnMessageInlineListYourInfiniteStorybookMessageUiMessageInlineListFragment =
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

export const MessageOnMessageInlineListYourInfiniteStorybookMessageUiMessageInlineListFragmentDoc = gql`
    fragment MessageOnMessageInlineListYourInfiniteStorybookMessageUiMessageInlineList on Message {
        ...MessageOnMessageListItemYourInfiniteStorybookMessageUiMessageListItem
    }
    ${MessageOnMessageListItemYourInfiniteStorybookMessageUiMessageListItemFragmentDoc}
`;
