import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type StoryOnStoryEditCardYourInfiniteStorybookStoryUiStoryEditCardFragment =
    {
        __typename?: 'Story';
        id?: string | null;
        title?: string | null;
        description?: string | null;
        lesson?: string | null;
        setting?: string | null;
        childName?: string | null;
        childAge?: number | null;
    };

export const StoryOnStoryEditCardYourInfiniteStorybookStoryUiStoryEditCardFragmentDoc = gql`
    fragment StoryOnStoryEditCardYourInfiniteStorybookStoryUiStoryEditCard on Story {
        id
        title
        description
        lesson
        setting
        childName
        childAge
    }
`;
