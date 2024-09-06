import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserListItemYourInfiniteStorybookUserUiUserListItemFragmentDoc } from '../../../../../user-list-item/src/lib/user-list-item/__generated__/user-list-item.component.graphql';

export type UserOnUserListYourInfiniteStorybookUserUiUserListFragment = {
    __typename?: 'User';
    id?: string | null;
    createdAt: any;
    updatedAt: any;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    bio?: string | null;
};

export const UserOnUserListYourInfiniteStorybookUserUiUserListFragmentDoc = gql`
    fragment UserOnUserListYourInfiniteStorybookUserUiUserList on User {
        ...UserOnUserListItemYourInfiniteStorybookUserUiUserListItem
    }
    ${UserOnUserListItemYourInfiniteStorybookUserUiUserListItemFragmentDoc}
`;
