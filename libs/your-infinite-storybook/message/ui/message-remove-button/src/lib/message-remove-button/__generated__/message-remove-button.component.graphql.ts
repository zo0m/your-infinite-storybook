import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type MessageOnMessageRemoveButtonYourInfiniteStorybookMessageUiMessageRemoveButtonFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageRemoveButtonYourInfiniteStorybookMessageUiMessageRemoveButtonFragmentDoc = gql`
    fragment MessageOnMessageRemoveButtonYourInfiniteStorybookMessageUiMessageRemoveButton on Message {
        id
    }
`;
