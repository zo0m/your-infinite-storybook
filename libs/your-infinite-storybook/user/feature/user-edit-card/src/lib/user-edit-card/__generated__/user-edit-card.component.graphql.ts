import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserEditCardYourInfiniteStorybookUserUiUserEditCardFragmentDoc } from '../../../../../../ui/user-edit-card/src/lib/user-edit-card/__generated__/user-edit-card.component.graphql';

export type GetUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        userId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardQuery =
    {
        __typename?: 'Query';
        user?: {
            __typename?: 'User';
            id?: string | null;
            name?: string | null;
            email?: string | null;
            role?: string | null;
            bio?: string | null;
        } | null;
    };

export type EditUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardMutationVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        user: YourInfiniteStorybookGraphQlClientTypes.UpdateUserInput;
    }>;

export type EditUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardMutation =
    {
        __typename?: 'Mutation';
        usersUpdate: Array<{
            __typename?: 'User';
            id?: string | null;
            name?: string | null;
            email?: string | null;
            role?: string | null;
            bio?: string | null;
        }>;
    };

export type DeleteUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardMutationVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        userId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type DeleteUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardMutation =
    {
        __typename?: 'Mutation';
        usersDelete: Array<{ __typename?: 'User'; id?: string | null }>;
    };

export type UserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardFragment =
    {
        __typename?: 'User';
        id?: string | null;
        name?: string | null;
        email?: string | null;
        role?: string | null;
        bio?: string | null;
    };

export const UserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardFragmentDoc = gql`
    fragment UserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCard on User {
        ...UserOnUserEditCardYourInfiniteStorybookUserUiUserEditCard
    }
    ${UserOnUserEditCardYourInfiniteStorybookUserUiUserEditCardFragmentDoc}
`;
export const GetUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardDocument = gql`
    query GetUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCard(
        $userId: ID!
    ) {
        user(id: $userId) {
            ...UserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCard
        }
    }
    ${UserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardGQL extends Apollo.Query<
    GetUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardQuery,
    GetUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardQueryVariables
> {
    override document =
        GetUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const EditUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardDocument = gql`
    mutation EditUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCard(
        $user: UpdateUserInput!
    ) {
        usersUpdate(users: [$user]) {
            ...UserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCard
        }
    }
    ${UserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class EditUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardGQL extends Apollo.Mutation<
    EditUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardMutation,
    EditUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardMutationVariables
> {
    override document =
        EditUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const DeleteUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardDocument = gql`
    mutation DeleteUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCard(
        $userId: ID!
    ) {
        usersDelete(ids: [$userId]) {
            id
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class DeleteUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardGQL extends Apollo.Mutation<
    DeleteUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardMutation,
    DeleteUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardMutationVariables
> {
    override document =
        DeleteUserOnUserEditCardYourInfiniteStorybookUserFeatureUserEditCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
