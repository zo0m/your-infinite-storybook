import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { UserOnUserGridItemYourInfiniteStorybookUserUiUserGridItemFragmentDoc } from '../../../../../user-grid-item/src/lib/user-grid-item/__generated__/user-grid-item.component.graphql';

export type UserOnUserGridYourInfiniteStorybookUserUiUserGridFragment = {
    __typename?: 'User';
    id?: string | null;
    createdAt: any;
    updatedAt: any;
    name?: string | null;
    email?: string | null;
    role?: string | null;
    bio?: string | null;
};

export const UserOnUserGridYourInfiniteStorybookUserUiUserGridFragmentDoc = gql`
    fragment UserOnUserGridYourInfiniteStorybookUserUiUserGrid on User {
        ...UserOnUserGridItemYourInfiniteStorybookUserUiUserGridItem
    }
    ${UserOnUserGridItemYourInfiniteStorybookUserUiUserGridItemFragmentDoc}
`;
