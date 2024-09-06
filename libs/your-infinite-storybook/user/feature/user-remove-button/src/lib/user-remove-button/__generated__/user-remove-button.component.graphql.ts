import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserRemoveButtonYourInfiniteStorybookUserUiUserRemoveButtonFragmentDoc } from '../../../../../../ui/user-remove-button/src/lib/user-remove-button/__generated__/user-remove-button.component.graphql';

export type GetUserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        userId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetUserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonQuery =
    {
        __typename?: 'Query';
        user?: {
            __typename?: 'User';
            id?: string | null;
            name?: string | null;
        } | null;
    };

export type UserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonFragment =
    { __typename?: 'User'; id?: string | null; name?: string | null };

export const UserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonFragmentDoc = gql`
    fragment UserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButton on User {
        ...UserOnUserRemoveButtonYourInfiniteStorybookUserUiUserRemoveButton
    }
    ${UserOnUserRemoveButtonYourInfiniteStorybookUserUiUserRemoveButtonFragmentDoc}
`;
export const GetUserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonDocument = gql`
    query GetUserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButton(
        $userId: ID!
    ) {
        user(id: $userId) {
            ...UserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButton
        }
    }
    ${UserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonGQL extends Apollo.Query<
    GetUserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonQuery,
    GetUserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonQueryVariables
> {
    override document =
        GetUserOnUserRemoveButtonYourInfiniteStorybookUserFeatureUserRemoveButtonDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
