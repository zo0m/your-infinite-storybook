import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageUiMessageFormFieldSearchFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageUiMessageFormFieldSearchFragmentDoc = gql`
    fragment MessageOnMessageFormFieldSearchYourInfiniteStorybookMessageUiMessageFormFieldSearch on Message {
        id
    }
`;
