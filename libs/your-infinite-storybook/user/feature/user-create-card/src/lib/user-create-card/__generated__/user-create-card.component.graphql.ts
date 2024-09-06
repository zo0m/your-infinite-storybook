import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type CreateUserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCardMutationVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        user: YourInfiniteStorybookGraphQlClientTypes.CreateUserInput;
    }>;

export type CreateUserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCardMutation =
    {
        __typename?: 'Mutation';
        usersCreate: Array<{
            __typename?: 'User';
            id?: string | null;
            name?: string | null;
            email?: string | null;
            role?: string | null;
            bio?: string | null;
        }>;
    };

export type UserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCardFragment =
    {
        __typename?: 'User';
        id?: string | null;
        name?: string | null;
        email?: string | null;
        role?: string | null;
        bio?: string | null;
    };

export const UserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCardFragmentDoc = gql`
    fragment UserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCard on User {
        id
        name
        email
        role
        bio
    }
`;
export const CreateUserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCardDocument = gql`
    mutation CreateUserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCard(
        $user: CreateUserInput!
    ) {
        usersCreate(users: [$user]) {
            ...UserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCard
        }
    }
    ${UserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCardFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class CreateUserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCardGQL extends Apollo.Mutation<
    CreateUserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCardMutation,
    CreateUserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCardMutationVariables
> {
    override document =
        CreateUserOnUserCreateCardYourInfiniteStorybookUserFeatureUserCreateCardDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
