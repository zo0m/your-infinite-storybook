import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type UserOnUserRemoveButtonYourInfiniteStorybookUserUiUserRemoveButtonFragment =
    { __typename?: 'User'; id?: string | null; name?: string | null };

export const UserOnUserRemoveButtonYourInfiniteStorybookUserUiUserRemoveButtonFragmentDoc = gql`
    fragment UserOnUserRemoveButtonYourInfiniteStorybookUserUiUserRemoveButton on User {
        id
        name
    }
`;
