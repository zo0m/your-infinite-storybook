import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import * as Apollo from 'apollo-angular';

import * as YourInfiniteStorybookGraphQlClientTypes from '../../../../../../../shared/utils/graphql-client-schema/src/lib/__generated__/your-infinite-storybook.graph-ql.client.types.d';
import { MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageUiMessageFormFieldLinkFragmentDoc } from '../../../../../../ui/message-form-field-link/src/lib/message-form-field-link/__generated__/message-form-field-link.component.graphql';

export type GetMessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkQueryVariables =
    YourInfiniteStorybookGraphQlClientTypes.Exact<{
        messageId: YourInfiniteStorybookGraphQlClientTypes.Scalars['ID'];
    }>;

export type GetMessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkQuery =
    {
        __typename?: 'Query';
        message?: { __typename?: 'Message'; id?: string | null } | null;
    };

export type MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkFragment =
    { __typename?: 'Message'; id?: string | null };

export const MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkFragmentDoc = gql`
    fragment MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLink on Message {
        ...MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageUiMessageFormFieldLink
    }
    ${MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageUiMessageFormFieldLinkFragmentDoc}
`;
export const GetMessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkDocument = gql`
    query GetMessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLink(
        $messageId: ID!
    ) {
        message(id: $messageId) {
            ...MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLink
        }
    }
    ${MessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkFragmentDoc}
`;

@Injectable({
    providedIn: 'root'
})
export class GetMessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkGQL extends Apollo.Query<
    GetMessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkQuery,
    GetMessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkQueryVariables
> {
    override document =
        GetMessageOnMessageFormFieldLinkYourInfiniteStorybookMessageFeatureMessageFormFieldLinkDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
