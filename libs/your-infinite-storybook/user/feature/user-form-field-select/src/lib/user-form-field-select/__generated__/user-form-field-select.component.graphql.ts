import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserFormFieldSelectYourInfiniteStorybookUserUiUserFormFieldSelectFragmentDoc } from '../../../../../../ui/user-form-field-select/src/lib/user-form-field-select/__generated__/user-form-field-select.component.graphql';

export type GetUserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        userId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetUserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectQuery =
    {
        __typename?: 'Query';
        user?: {
            __typename?: 'User';
            id?: string | null;
            name?: string | null;
        } | null;
    };

export type SearchUsersOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        search?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<
            YourInfiniteStorybookGraphQlClientTypes.Scalars['String']
        >;
    }>;

export type SearchUsersOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectQuery =
    {
        __typename?: 'Query';
        usersSearch: Array<{
            __typename?: 'User';
            id?: string | null;
            name?: string | null;
        }>;
    };

export type UserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectFragment =
    { __typename?: 'User'; id?: string | null; name?: string | null };

export const UserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectFragmentDoc = gql`
    fragment UserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelect on User {
        ...UserOnUserFormFieldSelectYourInfiniteStorybookUserUiUserFormFieldSelect
    }
    ${UserOnUserFormFieldSelectYourInfiniteStorybookUserUiUserFormFieldSelectFragmentDoc}
`;
export const GetUserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectDocument = gql`
    query GetUserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelect(
        $userId: ID!
    ) {
        user(id: $userId) {
            ...UserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelect
        }
    }
    ${UserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectGQL extends Apollo.Query<
    GetUserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectQuery,
    GetUserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectQueryVariables
> {
    override document =
        GetUserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const SearchUsersOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectDocument = gql`
    query SearchUsersOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelect(
        $search: String
    ) {
        usersSearch(search: $search) {
            ...UserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelect
        }
    }
    ${UserOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class SearchUsersOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectGQL extends Apollo.Query<
    SearchUsersOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectQuery,
    SearchUsersOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectQueryVariables
> {
    override document =
        SearchUsersOnUserFormFieldSelectYourInfiniteStorybookUserFeatureUserFormFieldSelectDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
