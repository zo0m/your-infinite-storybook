import { ConfigService } from '@nestjs/config';
import { Query, Resolver } from '@nestjs/graphql';
import { GraphQLScalarType } from 'graphql';
import GraphQLJSON from 'graphql-type-json';

@Resolver()
export class AppResolver {
    constructor(private readonly configService: ConfigService) {}

    @Query(() => GraphQLJSON)
    app(): GraphQLScalarType {
        return this.configService.get('app');
    }
}
