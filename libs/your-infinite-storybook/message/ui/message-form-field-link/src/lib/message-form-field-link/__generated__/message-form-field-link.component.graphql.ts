import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageUiMessageFormFieldLinkFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageUiMessageFormFieldLinkFragmentDoc = gql`
    fragment MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageUiMessageFormFieldLink on Message {
        id
    }
`;
