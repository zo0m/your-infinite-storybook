import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserCreateButtonYourInfiniteStorybookUserUiUserCreateButtonFragmentDoc } from '../../../../../../ui/user-create-button/src/lib/user-create-button/__generated__/user-create-button.component.graphql';

export type GetUserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButtonQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        userId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetUserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButtonQuery =
    {
        __typename?: 'Query';
        user?: {
            __typename?: 'User';
            id?: string | null;
            name?: string | null;
        } | null;
    };

export type UserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButtonFragment =
    { __typename?: 'User'; id?: string | null; name?: string | null };

export const UserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButtonFragmentDoc = gql`
    fragment UserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButton on User {
        ...UserOnUserCreateButtonYourInfiniteStorybookUserUiUserCreateButton
    }
    ${UserOnUserCreateButtonYourInfiniteStorybookUserUiUserCreateButtonFragmentDoc}
`;
export const GetUserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButtonDocument = gql`
    query GetUserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButton(
        $userId: ID!
    ) {
        user(id: $userId) {
            ...UserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButton
        }
    }
    ${UserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButtonFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButtonGQL extends Apollo.Query<
    GetUserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButtonQuery,
    GetUserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButtonQueryVariables
> {
    override document =
        GetUserOnUserCreateButtonYourInfiniteStorybookUserFeatureUserCreateButtonDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
