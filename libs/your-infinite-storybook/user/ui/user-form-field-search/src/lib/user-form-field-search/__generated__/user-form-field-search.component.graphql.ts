import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type UserOnUserFormFieldSearchYourInfiniteStorybookUserUiUserFormFieldSearchFragment =
    { __typename?: 'User'; id?: string | null; name?: string | null };

export const UserOnUserFormFieldSearchYourInfiniteStorybookUserUiUserFormFieldSearchFragmentDoc = gql`
    fragment UserOnUserFormFieldSearchYourInfiniteStorybookUserUiUserFormFieldSearch on User {
        id
        name
    }
`;
