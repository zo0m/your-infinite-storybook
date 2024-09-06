import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserTableCellYourInfiniteStorybookUserUiUserTableCellFragmentDoc } from '../../../../../user-table-cell/src/lib/user-table-cell/__generated__/user-table-cell.component.graphql';

export type UserOnUserTableYourInfiniteStorybookUserUiUserTableFragment = {
    __typename?: 'User';
    id?: string | null;
    createdAt: any;
    updatedAt: any;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    bio?: string | null;
};

export const UserOnUserTableYourInfiniteStorybookUserUiUserTableFragmentDoc = gql`
    fragment UserOnUserTableYourInfiniteStorybookUserUiUserTable on User {
        ...UserOnUserTableCellYourInfiniteStorybookUserUiUserTableCell
    }
    ${UserOnUserTableCellYourInfiniteStorybookUserUiUserTableCellFragmentDoc}
`;
