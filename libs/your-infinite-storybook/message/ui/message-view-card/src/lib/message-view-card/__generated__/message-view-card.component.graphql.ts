import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type MessageOnMessageViewCardYourInfiniteStorybookMessageUiMessageViewCardFragment =
    {
        __typename?: 'Message';
        id?: string | null;
        createdAt: any;
        updatedAt: any;
        role?: string | null;
        content?: string | null;
        storyId?: string | null;
    };

export const MessageOnMessageViewCardYourInfiniteStorybookMessageUiMessageViewCardFragmentDoc = gql`
    fragment MessageOnMessageViewCardYourInfiniteStorybookMessageUiMessageViewCard on Message {
        id
        createdAt
        updatedAt
        role
        content
        storyId
    }
`;
