import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type MessageOnMessageCreateButtonYourInfiniteStorybookMessageUiMessageCreateButtonFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageCreateButtonYourInfiniteStorybookMessageUiMessageCreateButtonFragmentDoc = gql`
    fragment MessageOnMessageCreateButtonYourInfiniteStorybookMessageUiMessageCreateButton on Message {
        id
    }
`;
