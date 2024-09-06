import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserFormFieldSearchYourInfiniteStorybookUserUiUserFormFieldSearchFragmentDoc } from '../../../../../../ui/user-form-field-search/src/lib/user-form-field-search/__generated__/user-form-field-search.component.graphql';

export type GetUserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        userId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetUserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchQuery =
    {
        __typename?: 'Query';
        user?: {
            __typename?: 'User';
            id?: string | null;
            name?: string | null;
        } | null;
    };

export type SearchUsersOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        search?: YourInfiniteStorybookGraphQlClientTypes.InputMaybe<
            YourInfiniteStorybookGraphQlClientTypes.Scalars['String']
        >;
    }>;

export type SearchUsersOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchQuery =
    {
        __typename?: 'Query';
        usersSearch: Array<{
            __typename?: 'User';
            id?: string | null;
            name?: string | null;
        }>;
    };

export type UserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchFragment =
    { __typename?: 'User'; id?: string | null; name?: string | null };

export const UserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchFragmentDoc = gql`
    fragment UserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearch on User {
        ...UserOnUserFormFieldSearchYourInfiniteStorybookUserUiUserFormFieldSearch
    }
    ${UserOnUserFormFieldSearchYourInfiniteStorybookUserUiUserFormFieldSearchFragmentDoc}
`;
export const GetUserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchDocument = gql`
    query GetUserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearch(
        $userId: ID!
    ) {
        user(id: $userId) {
            ...UserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearch
        }
    }
    ${UserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchGQL extends Apollo.Query<
    GetUserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchQuery,
    GetUserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchQueryVariables
> {
    override document =
        GetUserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const SearchUsersOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchDocument = gql`
    query SearchUsersOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearch(
        $search: String
    ) {
        usersSearch(search: $search) {
            ...UserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearch
        }
    }
    ${UserOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class SearchUsersOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchGQL extends Apollo.Query<
    SearchUsersOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchQuery,
    SearchUsersOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchQueryVariables
> {
    override document =
        SearchUsersOnUserFormFieldSearchYourInfiniteStorybookUserFeatureUserFormFieldSearchDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
