import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type StoryOnStoryLinkYourInfiniteStorybookStoryUiStoryLinkFragment = {
    __typename?: 'Story';
    id?: string | null;
};

export const StoryOnStoryLinkYourInfiniteStorybookStoryUiStoryLinkFragmentDoc = gql`
    fragment StoryOnStoryLinkYourInfiniteStorybookStoryUiStoryLink on Story {
        id
    }
`;
