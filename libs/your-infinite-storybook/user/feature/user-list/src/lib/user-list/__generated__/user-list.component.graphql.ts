import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserListYourInfiniteStorybookUserUiUserListFragmentDoc } from '../../../../../../ui/user-list/src/lib/user-list/__generated__/user-list.component.graphql';

export type GetUsersOnUserListYourInfiniteStorybookUserFeatureUserListQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        where?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<YourInfiniteStorybookGraphQlClientTypes.UsersWhereInput>;
    }>;

export type GetUsersOnUserListYourInfiniteStorybookUserFeatureUserListQuery = {
    __typename?: 'Query';
    users: Array<{
        __typename?: 'User';
        id?: string | null;
        createdAt: any;
        updatedAt: any;
        name?: string | null;
        email?: string | null;
        role?: string | null;
        bio?: string | null;
    }>;
};

export type UserOnUserListYourInfiniteStorybookUserFeatureUserListFragment = {
    __typename?: 'User';
    id?: string | null;
    createdAt: any;
    updatedAt: any;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    bio?: string | null;
};

export const UserOnUserListYourInfiniteStorybookUserFeatureUserListFragmentDoc = gql`
    fragment UserOnUserListYourInfiniteStorybookUserFeatureUserList on User {
        ...UserOnUserListYourInfiniteStorybookUserUiUserList
    }
    ${UserOnUserListYourInfiniteStorybookUserUiUserListFragmentDoc}
`;
export const GetUsersOnUserListYourInfiniteStorybookUserFeatureUserListDocument = gql`
    query GetUsersOnUserListYourInfiniteStorybookUserFeatureUserList(
        $where: UsersWhereInput
    ) {
        users(where: $where) {
            ...UserOnUserListYourInfiniteStorybookUserFeatureUserList
        }
    }
    ${UserOnUserListYourInfiniteStorybookUserFeatureUserListFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUsersOnUserListYourInfiniteStorybookUserFeatureUserListGQL extends Apollo.Query<
    GetUsersOnUserListYourInfiniteStorybookUserFeatureUserListQuery,
    GetUsersOnUserListYourInfiniteStorybookUserFeatureUserListQueryVariables
> {
    override document =
        GetUsersOnUserListYourInfiniteStorybookUserFeatureUserListDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
