import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserGridYourInfiniteStorybookUserUiUserGridFragmentDoc } from '../../../../../../ui/user-grid/src/lib/user-grid/__generated__/user-grid.component.graphql';

export type GetUsersOnUserGridYourInfiniteStorybookUserFeatureUserGridQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        where?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<YourInfiniteStorybookGraphQlClientTypes.UsersWhereInput>;
    }>;

export type GetUsersOnUserGridYourInfiniteStorybookUserFeatureUserGridQuery = {
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

export type UserOnUserGridYourInfiniteStorybookUserFeatureUserGridFragment = {
    __typename?: 'User';
    id?: string | null;
    createdAt: any;
    updatedAt: any;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    bio?: string | null;
};

export const UserOnUserGridYourInfiniteStorybookUserFeatureUserGridFragmentDoc = gql`
    fragment UserOnUserGridYourInfiniteStorybookUserFeatureUserGrid on User {
        ...UserOnUserGridYourInfiniteStorybookUserUiUserGrid
    }
    ${UserOnUserGridYourInfiniteStorybookUserUiUserGridFragmentDoc}
`;
export const GetUsersOnUserGridYourInfiniteStorybookUserFeatureUserGridDocument = gql`
    query GetUsersOnUserGridYourInfiniteStorybookUserFeatureUserGrid(
        $where: UsersWhereInput
    ) {
        users(where: $where) {
            ...UserOnUserGridYourInfiniteStorybookUserFeatureUserGrid
        }
    }
    ${UserOnUserGridYourInfiniteStorybookUserFeatureUserGridFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUsersOnUserGridYourInfiniteStorybookUserFeatureUserGridGQL extends Apollo.Query<
    GetUsersOnUserGridYourInfiniteStorybookUserFeatureUserGridQuery,
    GetUsersOnUserGridYourInfiniteStorybookUserFeatureUserGridQueryVariables
> {
    override document =
        GetUsersOnUserGridYourInfiniteStorybookUserFeatureUserGridDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
