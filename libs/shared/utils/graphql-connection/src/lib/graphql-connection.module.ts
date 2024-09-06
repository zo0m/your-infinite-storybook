import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
    FieldFunctionOptions,
    TypePolicy
} from '@apollo/client/cache/inmemory/policies';
import { InMemoryCache, split } from '@apollo/client/core';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

type EntityConfig = {
    __typename: string;
    field: string;
};

const fieldsReducer = (fields: TypePolicy['fields'], entity: EntityConfig) => {
    return {
        ...fields,
        [entity.field](_: any, { args, toReference }: FieldFunctionOptions) {
            return toReference({
                __typename: entity.__typename,
                id: args ? args['id'] : null
            });
        }
    };
};

const fields: TypePolicy['fields'] = [
    {
        __typename: 'EntityClass',
        field: 'entityClass'
    },
    {
        __typename: 'Entity',
        field: 'entity'
    },
    {
        __typename: 'User',
        field: 'user'
    },
    {
        __typename: 'Attribute',
        field: 'attribute'
    },
    {
        __typename: 'Event',
        field: 'event'
    },
    {
        __typename: 'EventPhoto',
        field: 'event-photo'
    },
    {
        __typename: 'EventType',
        field: 'event-type'
    },
    {
        __typename: 'Place',
        field: 'place'
    },
    {
        __typename: 'Story',
        field: 'story'
    }
].reduce(fieldsReducer, {});

@NgModule({
    imports: [HttpClientModule],
    exports: [ApolloModule],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory(httpLink: HttpLink) {
                const uri = `http://localhost:${process.env['API_PORT']}`;
                const wsUrl = `ws://localhost:${process.env['API_PORT']}`;

                // Create an http link:
                const http = httpLink.create({ uri });

                // Create a WebSocket link:
                const ws = new WebSocketLink({
                    uri: wsUrl,
                    options: { reconnect: true }
                });

                // using the ability to split links, you can send data to each link
                // depending on what kind of operation is being sent
                const link = split(
                    // split based on operation type
                    ({ query }) => {
                        const definition = getMainDefinition(query);
                        return (
                            definition.kind === 'OperationDefinition' &&
                            definition.operation === 'subscription'
                        );
                    },
                    ws,
                    http
                );

                const cache = new InMemoryCache({
                    typePolicies: { Query: { fields } }
                });

                return { cache, link };
            },
            deps: [HttpLink]
        }
    ]
})
export class GraphqlConnectionModule {}
