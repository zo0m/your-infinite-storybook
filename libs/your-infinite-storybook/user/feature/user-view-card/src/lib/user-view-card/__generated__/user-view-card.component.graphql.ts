import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserViewCardYourInfiniteStorybookUserUiUserViewCardFragmentDoc } from '../../../../../../ui/user-view-card/src/lib/user-view-card/__generated__/user-view-card.component.graphql';

export type GetUserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        userId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetUserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardQuery =
    {
        __typename?: 'Query';
        user?: {
            __typename?: 'User';
            id?: string | null;
            createdAt: any;
            updatedAt: any;
            name?: string | null;
            email?: string | null;
            role?: string | null;
            bio?: string | null;
        } | null;
    };

export type UserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardFragment =
    {
        __typename?: 'User';
        id?: string | null;
        createdAt: any;
        updatedAt: any;
        name?: string | null;
        email?: string | null;
        role?: string | null;
        bio?: string | null;
    };

export const UserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardFragmentDoc = gql`
    fragment UserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCard on User {
        ...UserOnUserViewCardYourInfiniteStorybookUserUiUserViewCard
    }
    ${UserOnUserViewCardYourInfiniteStorybookUserUiUserViewCardFragmentDoc}
`;
export const GetUserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardDocument = gql`
    query GetUserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCard(
        $userId: ID!
    ) {
        user(id: $userId) {
            ...UserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCard
        }
    }
    ${UserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardGQL extends Apollo.Query<
    GetUserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardQuery,
    GetUserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardQueryVariables
> {
    override document =
        GetUserOnUserViewCardYourInfiniteStorybookUserFeatureUserViewCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
