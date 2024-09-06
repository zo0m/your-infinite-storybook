import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type UserOnUserEditCardYourInfiniteStorybookUserUiUserEditCardFragment =
    {
        __typename?: 'User';
        id?: string | null;
        name?: string | null;
        email?: string | null;
        role?: string | null;
        bio?: string | null;
    };

export const UserOnUserEditCardYourInfiniteStorybookUserUiUserEditCardFragmentDoc = gql`
    fragment UserOnUserEditCardYourInfiniteStorybookUserUiUserEditCard on User {
        id
        name
        email
        role
        bio
    }
`;
