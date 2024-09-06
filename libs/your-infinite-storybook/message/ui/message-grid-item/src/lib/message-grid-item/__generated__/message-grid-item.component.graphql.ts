import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type MessageOnMessageGridItemYourInfiniteStorybookMessageUiMessageGridItemFragment =
    {
        __typename?: 'Message';
        id?: string | null;
        createdAt: any;
        updatedAt: any;
        role?: string | null;
        content?: string | null;
        storyId?: string | null;
    };

export const MessageOnMessageGridItemYourInfiniteStorybookMessageUiMessageGridItemFragmentDoc = gql`
    fragment MessageOnMessageGridItemYourInfiniteStorybookMessageUiMessageGridItem on Message {
        id
        createdAt
        updatedAt
        role
        content
        storyId
    }
`;
