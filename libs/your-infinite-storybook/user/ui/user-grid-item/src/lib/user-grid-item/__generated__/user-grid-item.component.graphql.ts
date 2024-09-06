import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type UserOnUserGridItemYourInfiniteStorybookUserUiUserGridItemFragment =
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

export const UserOnUserGridItemYourInfiniteStorybookUserUiUserGridItemFragmentDoc = gql`
    fragment UserOnUserGridItemYourInfiniteStorybookUserUiUserGridItem on User {
        id
        createdAt
        updatedAt
        name
        email
        role
        bio
    }
`;
