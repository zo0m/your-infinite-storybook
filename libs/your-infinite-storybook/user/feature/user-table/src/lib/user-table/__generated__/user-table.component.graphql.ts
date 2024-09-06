import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserTableYourInfiniteStorybookUserUiUserTableFragmentDoc } from '../../../../../../ui/user-table/src/lib/user-table/__generated__/user-table.component.graphql';

export type GetUsersOnUserTableYourInfiniteStorybookUserFeatureUserTableQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        where?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<YourInfiniteStorybookGraphQlClientTypes.UsersWhereInput>;
    }>;

export type GetUsersOnUserTableYourInfiniteStorybookUserFeatureUserTableQuery =
    {
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

export type UserOnUserTableYourInfiniteStorybookUserFeatureUserTableFragment = {
    __typename?: 'User';
    id?: string | null;
    createdAt: any;
    updatedAt: any;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    bio?: string | null;
};

export const UserOnUserTableYourInfiniteStorybookUserFeatureUserTableFragmentDoc = gql`
    fragment UserOnUserTableYourInfiniteStorybookUserFeatureUserTable on User {
        ...UserOnUserTableYourInfiniteStorybookUserUiUserTable
    }
    ${UserOnUserTableYourInfiniteStorybookUserUiUserTableFragmentDoc}
`;
export const GetUsersOnUserTableYourInfiniteStorybookUserFeatureUserTableDocument = gql`
    query GetUsersOnUserTableYourInfiniteStorybookUserFeatureUserTable(
        $where: UsersWhereInput
    ) {
        users(where: $where) {
            ...UserOnUserTableYourInfiniteStorybookUserFeatureUserTable
        }
    }
    ${UserOnUserTableYourInfiniteStorybookUserFeatureUserTableFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUsersOnUserTableYourInfiniteStorybookUserFeatureUserTableGQL extends Apollo.Query<
    GetUsersOnUserTableYourInfiniteStorybookUserFeatureUserTableQuery,
    GetUsersOnUserTableYourInfiniteStorybookUserFeatureUserTableQueryVariables
> {
    override document =
        GetUsersOnUserTableYourInfiniteStorybookUserFeatureUserTableDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
