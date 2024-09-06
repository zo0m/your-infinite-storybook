import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserEditButtonYourInfiniteStorybookUserUiUserEditButtonFragmentDoc } from '../../../../../../ui/user-edit-button/src/lib/user-edit-button/__generated__/user-edit-button.component.graphql';

export type GetUserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButtonQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        userId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetUserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButtonQuery =
    {
        __typename?: 'Query';
        user?: {
            __typename?: 'User';
            id?: string | null;
            name?: string | null;
        } | null;
    };

export type UserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButtonFragment =
    { __typename?: 'User'; id?: string | null; name?: string | null };

export const UserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButtonFragmentDoc = gql`
    fragment UserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButton on User {
        ...UserOnUserEditButtonYourInfiniteStorybookUserUiUserEditButton
    }
    ${UserOnUserEditButtonYourInfiniteStorybookUserUiUserEditButtonFragmentDoc}
`;
export const GetUserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButtonDocument = gql`
    query GetUserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButton(
        $userId: ID!
    ) {
        user(id: $userId) {
            ...UserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButton
        }
    }
    ${UserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButtonFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButtonGQL extends Apollo.Query<
    GetUserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButtonQuery,
    GetUserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButtonQueryVariables
> {
    override document =
        GetUserOnUserEditButtonYourInfiniteStorybookUserFeatureUserEditButtonDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
