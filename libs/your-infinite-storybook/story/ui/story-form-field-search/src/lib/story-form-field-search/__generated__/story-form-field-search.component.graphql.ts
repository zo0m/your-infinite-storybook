import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryUiStoryFormFieldSearchFragment =
    { __typename?: 'Story'; id?: string | null };

export const StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryUiStoryFormFieldSearchFragmentDoc = gql`
    fragment StoryOnStoryFormFieldSearchYourInfiniteStorybookStoryUiStoryFormFieldSearch on Story {
        id
    }
`;
