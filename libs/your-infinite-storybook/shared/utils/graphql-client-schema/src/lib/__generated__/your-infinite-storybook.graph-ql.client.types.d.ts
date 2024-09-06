export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
}

export interface CreateMessageInput {
    content?: InputMaybe<Scalars['String']>;
    role?: InputMaybe<Scalars['String']>;
    storyId?: InputMaybe<Scalars['ID']>;
}

export interface CreateStoryInput {
    childAge?: InputMaybe<Scalars['Float']>;
    childName?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    lesson?: InputMaybe<Scalars['String']>;
    setting?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
}

export interface CreateUserInput {
    bio?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    role?: InputMaybe<Scalars['String']>;
}

export interface Message {
    __typename?: 'Message';
    content?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    id?: Maybe<Scalars['ID']>;
    role?: Maybe<Scalars['String']>;
    story: Story;
    storyId?: Maybe<Scalars['ID']>;
    updatedAt: Scalars['DateTime'];
}

export interface MessagesWhereInput {
    content?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    role?: InputMaybe<Scalars['String']>;
    storyId?: InputMaybe<Scalars['ID']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface Mutation {
    __typename?: 'Mutation';
    messagesCreate: Array<Message>;
    messagesDelete: Array<Message>;
    messagesUpdate: Array<Message>;
    storiesCreate: Array<Story>;
    storiesDelete: Array<Story>;
    storiesUpdate: Array<Story>;
    storyGenerate: Story;
    usersCreate: Array<User>;
    usersDelete: Array<User>;
    usersUpdate: Array<User>;
}

export interface MutationMessagesCreateArgs {
    messages: Array<CreateMessageInput>;
}

export interface MutationMessagesDeleteArgs {
    ids: Array<Scalars['ID']>;
}

export interface MutationMessagesUpdateArgs {
    messages: Array<UpdateMessageInput>;
}

export interface MutationStoriesCreateArgs {
    stories: Array<CreateStoryInput>;
}

export interface MutationStoriesDeleteArgs {
    ids: Array<Scalars['ID']>;
}

export interface MutationStoriesUpdateArgs {
    stories: Array<UpdateStoryInput>;
}

export interface MutationStoryGenerateArgs {
    story: CreateStoryInput;
}

export interface MutationUsersCreateArgs {
    users: Array<CreateUserInput>;
}

export interface MutationUsersDeleteArgs {
    ids: Array<Scalars['ID']>;
}

export interface MutationUsersUpdateArgs {
    users: Array<UpdateUserInput>;
}

export interface Query {
    __typename?: 'Query';
    message?: Maybe<Message>;
    messages: Array<Message>;
    messagesSearch: Array<Message>;
    stories: Array<Story>;
    storiesSearch: Array<Story>;
    story?: Maybe<Story>;
    user?: Maybe<User>;
    users: Array<User>;
    usersSearch: Array<User>;
}

export interface QueryMessageArgs {
    id: Scalars['ID'];
}

export interface QueryMessagesArgs {
    id?: InputMaybe<Scalars['ID']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<MessagesWhereInput>;
}

export interface QueryMessagesSearchArgs {
    search?: InputMaybe<Scalars['String']>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
}

export interface QueryStoriesArgs {
    id?: InputMaybe<Scalars['ID']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<StoriesWhereInput>;
}

export interface QueryStoriesSearchArgs {
    search?: InputMaybe<Scalars['String']>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
}

export interface QueryStoryArgs {
    id: Scalars['ID'];
}

export interface QueryUserArgs {
    id: Scalars['ID'];
}

export interface QueryUsersArgs {
    id?: InputMaybe<Scalars['ID']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<UsersWhereInput>;
}

export interface QueryUsersSearchArgs {
    search?: InputMaybe<Scalars['String']>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
}

export interface StoriesWhereInput {
    childAge?: InputMaybe<Scalars['Float']>;
    childName?: InputMaybe<Scalars['String']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    description?: InputMaybe<Scalars['String']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    lesson?: InputMaybe<Scalars['String']>;
    setting?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface Story {
    __typename?: 'Story';
    childAge?: Maybe<Scalars['Float']>;
    childName?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    lesson?: Maybe<Scalars['String']>;
    messages: Array<Message>;
    setting?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
}

export interface StoryMessageWord {
    __typename?: 'StoryMessageWord';
    storyId?: Maybe<Scalars['String']>;
    word?: Maybe<Scalars['String']>;
}

export interface Subscription {
    __typename?: 'Subscription';
    messagesCreated: Array<Message>;
    messagesDeleted: Array<Message>;
    messagesUpdated: Array<Message>;
    newStoryMessageWord?: Maybe<StoryMessageWord>;
    storiesCreated: Array<Story>;
    storiesDeleted: Array<Story>;
    storiesUpdated: Array<Story>;
    usersCreated: Array<User>;
    usersDeleted: Array<User>;
    usersUpdated: Array<User>;
}

export interface SubscriptionNewStoryMessageWordArgs {
    storyId: Scalars['String'];
}

export interface UpdateMessageInput {
    content?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    role?: InputMaybe<Scalars['String']>;
    storyId?: InputMaybe<Scalars['ID']>;
}

export interface UpdateStoryInput {
    childAge?: InputMaybe<Scalars['Float']>;
    childName?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    lesson?: InputMaybe<Scalars['String']>;
    setting?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
}

export interface UpdateUserInput {
    bio?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    role?: InputMaybe<Scalars['String']>;
}

export interface User {
    __typename?: 'User';
    bio?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    role?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
}

export interface UsersWhereInput {
    createdAt?: InputMaybe<Scalars['DateTime']>;
    email?: InputMaybe<Scalars['String']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    name?: InputMaybe<Scalars['String']>;
    role?: InputMaybe<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
}
