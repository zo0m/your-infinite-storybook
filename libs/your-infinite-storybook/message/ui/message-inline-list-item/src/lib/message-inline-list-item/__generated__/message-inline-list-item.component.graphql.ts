import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type MessageOnMessageInlineListItemYourInfiniteStorybookMessageUiMessageInlineListItemFragment =
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

export const MessageOnMessageInlineListItemYourInfiniteStorybookMessageUiMessageInlineListItemFragmentDoc = gql`
    fragment MessageOnMessageInlineListItemYourInfiniteStorybookMessageUiMessageInlineListItem on Message {
        id
        createdAt
        updatedAt
        role
        content
        storyId
        story {
            id
            title
        }
    }
`;
