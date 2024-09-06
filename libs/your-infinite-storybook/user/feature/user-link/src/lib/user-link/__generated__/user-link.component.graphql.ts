import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserLinkYourInfiniteStorybookUserUiUserLinkFragmentDoc } from '../../../../../../ui/user-link/src/lib/user-link/__generated__/user-link.component.graphql';

export type GetUserOnUserLinkYourInfiniteStorybookUserFeatureUserLinkQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        userId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetUserOnUserLinkYourInfiniteStorybookUserFeatureUserLinkQuery = {
    __typename?: 'Query';
    user?: {
        __typename?: 'User';
        id?: string | null;
        name?: string | null;
    } | null;
};

export type UserOnUserLinkYourInfiniteStorybookUserFeatureUserLinkFragment = {
    __typename?: 'User';
    id?: string | null;
    name?: string | null;
};

export const UserOnUserLinkYourInfiniteStorybookUserFeatureUserLinkFragmentDoc = gql`
    fragment UserOnUserLinkYourInfiniteStorybookUserFeatureUserLink on User {
        ...UserOnUserLinkYourInfiniteStorybookUserUiUserLink
    }
    ${UserOnUserLinkYourInfiniteStorybookUserUiUserLinkFragmentDoc}
`;
export const GetUserOnUserLinkYourInfiniteStorybookUserFeatureUserLinkDocument = gql`
    query GetUserOnUserLinkYourInfiniteStorybookUserFeatureUserLink(
        $userId: ID!
    ) {
        user(id: $userId) {
            ...UserOnUserLinkYourInfiniteStorybookUserFeatureUserLink
        }
    }
    ${UserOnUserLinkYourInfiniteStorybookUserFeatureUserLinkFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUserOnUserLinkYourInfiniteStorybookUserFeatureUserLinkGQL extends Apollo.Query<
    GetUserOnUserLinkYourInfiniteStorybookUserFeatureUserLinkQuery,
    GetUserOnUserLinkYourInfiniteStorybookUserFeatureUserLinkQueryVariables
> {
    override document =
        GetUserOnUserLinkYourInfiniteStorybookUserFeatureUserLinkDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
