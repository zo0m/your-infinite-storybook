import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryGridItemYourInfiniteStorybookStoryUiStoryGridItemFragmentDoc } from '../../../../../story-grid-item/src/lib/story-grid-item/__generated__/story-grid-item.component.graphql';

export type StoryOnStoryGridYourInfiniteStorybookStoryUiStoryGridFragment = {
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

export const StoryOnStoryGridYourInfiniteStorybookStoryUiStoryGridFragmentDoc = gql`
    fragment StoryOnStoryGridYourInfiniteStorybookStoryUiStoryGrid on Story {
        ...StoryOnStoryGridItemYourInfiniteStorybookStoryUiStoryGridItem
    }
    ${StoryOnStoryGridItemYourInfiniteStorybookStoryUiStoryGridItemFragmentDoc}
`;
