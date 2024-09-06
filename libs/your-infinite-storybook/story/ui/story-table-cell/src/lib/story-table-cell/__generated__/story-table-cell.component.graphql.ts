import { gql } from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';

export type StoryOnStoryTableCellYourInfiniteStorybookStoryUiStoryTableCellFragment =
    {
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

export const StoryOnStoryTableCellYourInfiniteStorybookStoryUiStoryTableCellFragmentDoc = gql`
    fragment StoryOnStoryTableCellYourInfiniteStorybookStoryUiStoryTableCell on Story {
        id
        createdAt
        updatedAt
        title
        description
        lesson
        setting
        childName
        childAge
    }
`;
