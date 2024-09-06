import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type MessageOnMessageEditCardYourInfiniteStorybookMessageUiMessageEditCardFragment =
    {
        __typename?: 'Message';
        id?: string | null;
        role?: string | null;
        content?: string | null;
        storyId?: string | null;
    };

export const MessageOnMessageEditCardYourInfiniteStorybookMessageUiMessageEditCardFragmentDoc = gql`
    fragment MessageOnMessageEditCardYourInfiniteStorybookMessageUiMessageEditCard on Message {
        id
        role
        content
        storyId
    }
`;
