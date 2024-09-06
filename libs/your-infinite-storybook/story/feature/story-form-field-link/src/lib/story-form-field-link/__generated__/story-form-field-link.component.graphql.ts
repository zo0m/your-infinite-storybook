import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { StoryOnStoryFormFieldLinkYourInfiniteStorybookStoryUiStoryFormFieldLinkFragmentDoc } from '../../../../../../ui/story-form-field-link/src/lib/story-form-field-link/__generated__/story-form-field-link.component.graphql';

export type GetStoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        storyId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetStoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkQuery =
    {
        __typename?: 'Query';
        story?: { __typename?: 'Story'; id?: string | null } | null;
    };

export type StoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkFragment =
    { __typename?: 'Story'; id?: string | null };

export const StoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkFragmentDoc = gql`
    fragment StoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLink on Story {
        ...StoryOnStoryFormFieldLinkYourInfiniteStorybookStoryUiStoryFormFieldLink
    }
    ${StoryOnStoryFormFieldLinkYourInfiniteStorybookStoryUiStoryFormFieldLinkFragmentDoc}
`;
export const GetStoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkDocument = gql`
    query GetStoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLink(
        $storyId: ID!
    ) {
        story(id: $storyId) {
            ...StoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLink
        }
    }
    ${StoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetStoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkGQL extends Apollo.Query<
    GetStoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkQuery,
    GetStoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkQueryVariables
> {
    override document =
        GetStoryOnStoryFormFieldLinkYourInfiniteStorybookStoryFeatureStoryFormFieldLinkDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
