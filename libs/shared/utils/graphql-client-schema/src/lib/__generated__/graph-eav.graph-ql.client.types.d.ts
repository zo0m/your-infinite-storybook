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
    JSON: any;
}

export interface Attribute {
    __typename?: 'Attribute';
    bindings: Array<Binding>;
    createdAt: Scalars['DateTime'];
    deprecated?: Maybe<Scalars['Boolean']>;
    description?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    multiple?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    nullable?: Maybe<Scalars['Boolean']>;
    order?: Maybe<Scalars['Float']>;
    placeholder?: Maybe<Scalars['String']>;
    readonly?: Maybe<Scalars['Boolean']>;
    type?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
    values: Array<Value>;
}

export interface AttributesWhereInput {
    createdAt?: InputMaybe<Scalars['DateTime']>;
    description?: InputMaybe<Scalars['String']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    name?: InputMaybe<Scalars['String']>;
    placeholder?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface Binding {
    __typename?: 'Binding';
    attribute: Attribute;
    attributeId?: Maybe<Scalars['ID']>;
    attributeOrder?: Maybe<Scalars['Float']>;
    createdAt: Scalars['DateTime'];
    deprecated?: Maybe<Scalars['Boolean']>;
    entityClass: EntityClass;
    entityClassId?: Maybe<Scalars['ID']>;
    hidden?: Maybe<Scalars['Boolean']>;
    id?: Maybe<Scalars['ID']>;
    type?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
}

export interface BindingsWhereInput {
    attributeId?: InputMaybe<Scalars['ID']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    deprecated?: InputMaybe<Scalars['Boolean']>;
    entityClassId?: InputMaybe<Scalars['ID']>;
    hidden?: InputMaybe<Scalars['Boolean']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    type?: InputMaybe<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface CreateAttributeInput {
    deprecated?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    multiple?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
    nullable?: InputMaybe<Scalars['Boolean']>;
    order?: InputMaybe<Scalars['Float']>;
    placeholder?: InputMaybe<Scalars['String']>;
    readonly?: InputMaybe<Scalars['Boolean']>;
    type?: InputMaybe<Scalars['String']>;
}

export interface CreateBindingInput {
    attributeId?: InputMaybe<Scalars['ID']>;
    attributeOrder?: InputMaybe<Scalars['Float']>;
    deprecated?: InputMaybe<Scalars['Boolean']>;
    entityClassId?: InputMaybe<Scalars['ID']>;
    hidden?: InputMaybe<Scalars['Boolean']>;
    type?: InputMaybe<Scalars['String']>;
}

export interface CreateEntityClassInput {
    deprecated?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    parentId?: InputMaybe<Scalars['ID']>;
}

export interface CreateEntityInput {
    description?: InputMaybe<Scalars['String']>;
    entityClassId?: InputMaybe<Scalars['ID']>;
    id?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    parentId?: InputMaybe<Scalars['ID']>;
    version?: InputMaybe<Scalars['Float']>;
}

export interface CreateUserInput {
    description?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
}

export interface CreateValueInput {
    attributeId?: InputMaybe<Scalars['ID']>;
    entityId?: InputMaybe<Scalars['ID']>;
    intValue?: InputMaybe<Scalars['Float']>;
    jsonValue?: InputMaybe<Scalars['JSON']>;
    value?: InputMaybe<Scalars['String']>;
}

export interface EntitiesWhereInput {
    createdAt?: InputMaybe<Scalars['DateTime']>;
    entityClassId?: InputMaybe<Scalars['ID']>;
    id?: InputMaybe<Scalars['ID']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    name?: InputMaybe<Scalars['String']>;
    parentId?: InputMaybe<Scalars['ID']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    version?: InputMaybe<Scalars['Float']>;
}

export interface Entity {
    __typename?: 'Entity';
    children: Array<Entity>;
    childrenCount: Scalars['Float'];
    createdAt: Scalars['DateTime'];
    description?: Maybe<Scalars['String']>;
    entityClass: EntityClass;
    entityClassId?: Maybe<Scalars['ID']>;
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    parent?: Maybe<Entity>;
    parentId?: Maybe<Scalars['ID']>;
    parents: Array<Entity>;
    updatedAt: Scalars['DateTime'];
    values: Array<Value>;
    version?: Maybe<Scalars['Float']>;
}

export interface EntityClass {
    __typename?: 'EntityClass';
    bindings: Array<Binding>;
    children: Array<EntityClass>;
    childrenCount: Scalars['Float'];
    createdAt: Scalars['DateTime'];
    deprecated?: Maybe<Scalars['Boolean']>;
    description?: Maybe<Scalars['String']>;
    entities: Array<Entity>;
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    parent?: Maybe<EntityClass>;
    parentId?: Maybe<Scalars['ID']>;
    parents: Array<EntityClass>;
    updatedAt: Scalars['DateTime'];
}

export interface EntityClassesWhereInput {
    createdAt?: InputMaybe<Scalars['DateTime']>;
    deprecated?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    name?: InputMaybe<Scalars['String']>;
    parentId?: InputMaybe<Scalars['ID']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface Mutation {
    __typename?: 'Mutation';
    attributesCreate: Array<Attribute>;
    attributesDelete: Array<Attribute>;
    attributesUpdate: Array<Attribute>;
    bindingsCreate: Array<Binding>;
    bindingsDelete: Array<Binding>;
    bindingsUpdate: Array<Binding>;
    entitiesCreate: Array<Entity>;
    entitiesDelete: Array<Entity>;
    entitiesUpdate: Array<Entity>;
    entityClassesCreate: Array<EntityClass>;
    entityClassesDelete: Array<EntityClass>;
    entityClassesUpdate: Array<EntityClass>;
    usersCreate: Array<User>;
    usersDelete: Array<User>;
    usersUpdate: Array<User>;
    valuesCreate: Array<Value>;
    valuesDelete: Array<Value>;
    valuesUpdate: Array<Value>;
}

export interface MutationAttributesCreateArgs {
    attributes: Array<CreateAttributeInput>;
}

export interface MutationAttributesDeleteArgs {
    ids: Array<Scalars['ID']>;
}

export interface MutationAttributesUpdateArgs {
    attributes: Array<UpdateAttributeInput>;
}

export interface MutationBindingsCreateArgs {
    bindings: Array<CreateBindingInput>;
}

export interface MutationBindingsDeleteArgs {
    ids: Array<Scalars['ID']>;
}

export interface MutationBindingsUpdateArgs {
    bindings: Array<UpdateBindingInput>;
}

export interface MutationEntitiesCreateArgs {
    entities: Array<CreateEntityInput>;
}

export interface MutationEntitiesDeleteArgs {
    ids: Array<Scalars['ID']>;
}

export interface MutationEntitiesUpdateArgs {
    entities: Array<UpdateEntityInput>;
}

export interface MutationEntityClassesCreateArgs {
    entityClasses: Array<CreateEntityClassInput>;
}

export interface MutationEntityClassesDeleteArgs {
    ids: Array<Scalars['ID']>;
}

export interface MutationEntityClassesUpdateArgs {
    entityClasses: Array<UpdateEntityClassInput>;
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

export interface MutationValuesCreateArgs {
    values: Array<CreateValueInput>;
}

export interface MutationValuesDeleteArgs {
    ids: Array<Scalars['ID']>;
}

export interface MutationValuesUpdateArgs {
    values: Array<UpdateValueInput>;
}

export interface Query {
    __typename?: 'Query';
    attribute?: Maybe<Attribute>;
    attributes: Array<Attribute>;
    attributesSearch: Array<Attribute>;
    binding?: Maybe<Binding>;
    bindings: Array<Binding>;
    bindingsSearch: Array<Binding>;
    entities: Array<Entity>;
    entitiesSearch: Array<Entity>;
    entity?: Maybe<Entity>;
    entityClass?: Maybe<EntityClass>;
    entityClasses: Array<EntityClass>;
    entityClassesSearch: Array<EntityClass>;
    user?: Maybe<User>;
    users: Array<User>;
    usersSearch: Array<User>;
    value?: Maybe<Value>;
    values: Array<Value>;
    valuesSearch: Array<Value>;
}

export interface QueryAttributeArgs {
    id: Scalars['ID'];
}

export interface QueryAttributesArgs {
    id?: InputMaybe<Scalars['ID']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<AttributesWhereInput>;
}

export interface QueryAttributesSearchArgs {
    search?: InputMaybe<Scalars['String']>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
}

export interface QueryBindingArgs {
    id: Scalars['ID'];
}

export interface QueryBindingsArgs {
    id?: InputMaybe<Scalars['ID']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<BindingsWhereInput>;
}

export interface QueryBindingsSearchArgs {
    search?: InputMaybe<Scalars['String']>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
}

export interface QueryEntitiesArgs {
    id?: InputMaybe<Scalars['ID']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<EntitiesWhereInput>;
}

export interface QueryEntitiesSearchArgs {
    search?: InputMaybe<Scalars['String']>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
}

export interface QueryEntityArgs {
    id: Scalars['ID'];
}

export interface QueryEntityClassArgs {
    id: Scalars['ID'];
}

export interface QueryEntityClassesArgs {
    id?: InputMaybe<Scalars['ID']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<EntityClassesWhereInput>;
}

export interface QueryEntityClassesSearchArgs {
    search?: InputMaybe<Scalars['String']>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
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

export interface QueryValueArgs {
    id: Scalars['ID'];
}

export interface QueryValuesArgs {
    id?: InputMaybe<Scalars['ID']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
    where?: InputMaybe<ValuesWhereInput>;
}

export interface QueryValuesSearchArgs {
    search?: InputMaybe<Scalars['String']>;
    skip?: InputMaybe<Scalars['Int']>;
    take?: InputMaybe<Scalars['Int']>;
}

export interface Subscription {
    __typename?: 'Subscription';
    attributesCreated: Array<Attribute>;
    attributesDeleted: Array<Attribute>;
    attributesUpdated: Array<Attribute>;
    bindingsCreated: Array<Binding>;
    bindingsDeleted: Array<Binding>;
    bindingsUpdated: Array<Binding>;
    entitiesCreated: Array<Entity>;
    entitiesDeleted: Array<Entity>;
    entitiesUpdated: Array<Entity>;
    entityClassesCreated: Array<EntityClass>;
    entityClassesDeleted: Array<EntityClass>;
    entityClassesUpdated: Array<EntityClass>;
    usersCreated: Array<User>;
    usersDeleted: Array<User>;
    usersUpdated: Array<User>;
    valuesCreated: Array<Value>;
    valuesDeleted: Array<Value>;
    valuesUpdated: Array<Value>;
}

export interface UpdateAttributeInput {
    deprecated?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    multiple?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
    nullable?: InputMaybe<Scalars['Boolean']>;
    order?: InputMaybe<Scalars['Float']>;
    placeholder?: InputMaybe<Scalars['String']>;
    readonly?: InputMaybe<Scalars['Boolean']>;
    type?: InputMaybe<Scalars['String']>;
}

export interface UpdateBindingInput {
    attributeId?: InputMaybe<Scalars['ID']>;
    attributeOrder?: InputMaybe<Scalars['Float']>;
    deprecated?: InputMaybe<Scalars['Boolean']>;
    entityClassId?: InputMaybe<Scalars['ID']>;
    hidden?: InputMaybe<Scalars['Boolean']>;
    id: Scalars['ID'];
    type?: InputMaybe<Scalars['String']>;
}

export interface UpdateEntityClassInput {
    deprecated?: InputMaybe<Scalars['Boolean']>;
    description?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    parentId?: InputMaybe<Scalars['ID']>;
}

export interface UpdateEntityInput {
    description?: InputMaybe<Scalars['String']>;
    entityClassId?: InputMaybe<Scalars['ID']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    parentId?: InputMaybe<Scalars['ID']>;
    version?: InputMaybe<Scalars['Float']>;
}

export interface UpdateUserInput {
    description?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
}

export interface UpdateValueInput {
    attributeId?: InputMaybe<Scalars['ID']>;
    entityId?: InputMaybe<Scalars['ID']>;
    id: Scalars['ID'];
    intValue?: InputMaybe<Scalars['Float']>;
    jsonValue?: InputMaybe<Scalars['JSON']>;
    value?: InputMaybe<Scalars['String']>;
}

export interface User {
    __typename?: 'User';
    createdAt: Scalars['DateTime'];
    description?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
}

export interface UsersWhereInput {
    createdAt?: InputMaybe<Scalars['DateTime']>;
    email?: InputMaybe<Scalars['String']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    name?: InputMaybe<Scalars['String']>;
    type?: InputMaybe<Scalars['String']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface Value {
    __typename?: 'Value';
    attribute: Attribute;
    attributeId?: Maybe<Scalars['ID']>;
    createdAt: Scalars['DateTime'];
    entity: Entity;
    entityId?: Maybe<Scalars['ID']>;
    id?: Maybe<Scalars['ID']>;
    intValue?: Maybe<Scalars['Float']>;
    jsonValue?: Maybe<Scalars['JSON']>;
    updatedAt: Scalars['DateTime'];
    value?: Maybe<Scalars['String']>;
}

export interface ValuesWhereInput {
    attributeId?: InputMaybe<Scalars['ID']>;
    createdAt?: InputMaybe<Scalars['DateTime']>;
    entityId?: InputMaybe<Scalars['ID']>;
    ids?: InputMaybe<Array<Scalars['ID']>>;
    intValue?: InputMaybe<Scalars['Float']>;
    updatedAt?: InputMaybe<Scalars['DateTime']>;
    value?: InputMaybe<Scalars['String']>;
}
