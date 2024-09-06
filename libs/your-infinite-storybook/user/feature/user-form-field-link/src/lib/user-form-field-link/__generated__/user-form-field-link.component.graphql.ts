import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserFormFieldLinkYourInfiniteStorybookUserUiUserFormFieldLinkFragmentDoc } from '../../../../../../ui/user-form-field-link/src/lib/user-form-field-link/__generated__/user-form-field-link.component.graphql';

export type GetUserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLinkQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        userId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetUserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLinkQuery =
    {
        __typename?: 'Query';
        user?: {
            __typename?: 'User';
            id?: string | null;
            name?: string | null;
        } | null;
    };

export type UserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLinkFragment =
    { __typename?: 'User'; id?: string | null; name?: string | null };

export const UserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLinkFragmentDoc = gql`
    fragment UserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLink on User {
        ...UserOnUserFormFieldLinkYourInfiniteStorybookUserUiUserFormFieldLink
    }
    ${UserOnUserFormFieldLinkYourInfiniteStorybookUserUiUserFormFieldLinkFragmentDoc}
`;
export const GetUserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLinkDocument = gql`
    query GetUserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLink(
        $userId: ID!
    ) {
        user(id: $userId) {
            ...UserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLink
        }
    }
    ${UserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLinkFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetUserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLinkGQL extends Apollo.Query<
    GetUserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLinkQuery,
    GetUserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLinkQueryVariables
> {
    override document =
        GetUserOnUserFormFieldLinkYourInfiniteStorybookUserFeatureUserFormFieldLinkDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
