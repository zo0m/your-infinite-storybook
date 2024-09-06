import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryListItemYourInfiniteStorybookStoryUiStoryListItemFragmentDoc } from '../../../../../story-list-item/src/lib/story-list-item/__generated__/story-list-item.component.graphql';

export type StoryOnStoryListYourInfiniteStorybookStoryUiStoryListFragment = {
    __typename?: 'Story';
    id?: string | null;
    createdAt: any;
    updatedAt: any;
    title?: string | null;
    description?: string | null;
    lesson?: string | null;
    setting?: string | null;
    childName?: string | null;
    childAge?: number | null;
};

export const StoryOnStoryListYourInfiniteStorybookStoryUiStoryListFragmentDoc = gql`
    fragment StoryOnStoryListYourInfiniteStorybookStoryUiStoryList on Story {
        ...StoryOnStoryListItemYourInfiniteStorybookStoryUiStoryListItem
    }
    ${StoryOnStoryListItemYourInfiniteStorybookStoryUiStoryListItemFragmentDoc}
`;
