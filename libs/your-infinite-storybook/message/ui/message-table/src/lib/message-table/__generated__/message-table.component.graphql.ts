import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageTableCellYourInfiniteStorybookMessageUiMessageTableCellFragmentDoc } from '../../../../../message-table-cell/src/lib/message-table-cell/__generated__/message-table-cell.component.graphql';

export type MessageOnMessageTableYourInfiniteStorybookMessageUiMessageTableFragment =
    {
        __typename?: 'Message';
        id?: string | null;
        createdAt: any;
        updatedAt: any;
        role?: string | null;
        content?: string | null;
        storyId?: string | null;
    };

export const MessageOnMessageTableYourInfiniteStorybookMessageUiMessageTableFragmentDoc = gql`
    fragment MessageOnMessageTableYourInfiniteStorybookMessageUiMessageTable on Message {
        ...MessageOnMessageTableCellYourInfiniteStorybookMessageUiMessageTableCell
    }
    ${MessageOnMessageTableCellYourInfiniteStorybookMessageUiMessageTableCellFragmentDoc}
`;
