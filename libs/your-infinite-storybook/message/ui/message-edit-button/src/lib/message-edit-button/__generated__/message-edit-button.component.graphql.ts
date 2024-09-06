import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type MessageOnMessageEditButtonYourInfiniteStorybookMessageUiMessageEditButtonFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageEditButtonYourInfiniteStorybookMessageUiMessageEditButtonFragmentDoc = gql`
    fragment MessageOnMessageEditButtonYourInfiniteStorybookMessageUiMessageEditButton on Message {
        id
    }
`;
