import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryTableCellYourInfiniteStorybookStoryUiStoryTableCellFragmentDoc } from '../../../../../story-table-cell/src/lib/story-table-cell/__generated__/story-table-cell.component.graphql';

export type StoryOnStoryTableYourInfiniteStorybookStoryUiStoryTableFragment = {
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

export const StoryOnStoryTableYourInfiniteStorybookStoryUiStoryTableFragmentDoc = gql`
    fragment StoryOnStoryTableYourInfiniteStorybookStoryUiStoryTable on Story {
        ...StoryOnStoryTableCellYourInfiniteStorybookStoryUiStoryTableCell
    }
    ${StoryOnStoryTableCellYourInfiniteStorybookStoryUiStoryTableCellFragmentDoc}
`;
