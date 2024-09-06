import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type UserOnUserFormFieldSelectYourInfiniteStorybookUserUiUserFormFieldSelectFragment =
    { __typename?: 'User'; id?: string | null; name?: string | null };

export const UserOnUserFormFieldSelectYourInfiniteStorybookUserUiUserFormFieldSelectFragmentDoc = gql`
    fragment UserOnUserFormFieldSelectYourInfiniteStorybookUserUiUserFormFieldSelect on User {
        id
        name
    }
`;
