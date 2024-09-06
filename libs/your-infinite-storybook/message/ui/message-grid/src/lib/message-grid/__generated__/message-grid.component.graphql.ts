import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageGridItemYourInfiniteStorybookMessageUiMessageGridItemFragmentDoc } from '../../../../../message-grid-item/src/lib/message-grid-item/__generated__/message-grid-item.component.graphql';

export type MessageOnMessageGridYourInfiniteStorybookMessageUiMessageGridFragment =
    {
        __typename?: 'Message';
        id?: string | null;
        createdAt: any;
        updatedAt: any;
        role?: string | null;
        content?: string | null;
        storyId?: string | null;
    };

export const MessageOnMessageGridYourInfiniteStorybookMessageUiMessageGridFragmentDoc = gql`
    fragment MessageOnMessageGridYourInfiniteStorybookMessageUiMessageGrid on Message {
        ...MessageOnMessageGridItemYourInfiniteStorybookMessageUiMessageGridItem
    }
    ${MessageOnMessageGridItemYourInfiniteStorybookMessageUiMessageGridItemFragmentDoc}
`;
