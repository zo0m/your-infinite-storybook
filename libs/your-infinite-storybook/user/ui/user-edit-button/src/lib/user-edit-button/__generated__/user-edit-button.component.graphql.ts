import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type UserOnUserEditButtonYourInfiniteStorybookUserUiUserEditButtonFragment =
    { __typename?: 'User'; id?: string | null; name?: string | null };

export const UserOnUserEditButtonYourInfiniteStorybookUserUiUserEditButtonFragmentDoc = gql`
    fragment UserOnUserEditButtonYourInfiniteStorybookUserUiUserEditButton on User {
        id
        name
    }
`;
