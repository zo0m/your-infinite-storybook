import {
    Args,
    Context,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
    Subscription
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { GetDataLoader } from '@your-infinite-storybook/shared/api/graphql-dataloader-extend-context';
import { UsersDataLoader } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-data-loader';
import {
    CreateUsersArgs,
    DeleteUsersArgs,
    SearchUsersArgs,
    UpdateUsersArgs,
    UserArgs,
    UsersArgs
} from '@your-infinite-storybook/your-infinite-storybook/user/api/user-dto';
import { User } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-model';
import { UsersService } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-service';

const pubSub = new PubSub();

@Resolver(() => User)
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService,
        private readonly usersDataLoader: UsersDataLoader
    ) {}

    @Query(() => [User])
    async users(
        @Args() { ids, skip, take, where }: UsersArgs
    ): Promise<User[]> {
        const options = { skip, take, where: { ...where } };

        return ids && ids.length
            ? this.usersService.findByIds(ids, options)
            : this.usersService.find(options);
    }

    @Query(() => User, { nullable: true })
    async user(@Args() { id }: UserArgs): Promise<User | null> {
        return id ? this.usersService.findById(id) : null;
    }

    @Query(() => [User])
    async usersSearch(
        @Args() { search, skip, take }: SearchUsersArgs
    ): Promise<User[]> {
        const options = { skip, take };
        return this.usersService.search(search, options);
    }

    @Mutation(() => [User])
    async usersCreate(@Args() { users }: CreateUsersArgs): Promise<User[]> {
        const usersCreated = await this.usersService.create(...users);
        pubSub.publish('usersCreated', { usersCreated });
        return usersCreated;
    }

    @Mutation(() => [User])
    async usersUpdate(@Args() { users }: UpdateUsersArgs): Promise<User[]> {
        const usersUpdated = await this.usersService.update(...users);
        pubSub.publish('usersUpdated', { usersUpdated });
        return usersUpdated;
    }

    @Mutation(() => [User])
    async usersDelete(@Args() { ids }: DeleteUsersArgs): Promise<User[]> {
        const usersDeleted = this.usersService.delete(...ids);
        pubSub.publish('usersDeleted', { usersDeleted });
        return usersDeleted;
    }

    @Subscription(() => [User])
    async usersCreated() {
        return pubSub.asyncIterator<User>('usersCreated');
    }

    @Subscription(() => [User])
    async usersUpdated() {
        return pubSub.asyncIterator<User>('usersUpdated');
    }

    @Subscription(() => [User])
    async usersDeleted() {
        return pubSub.asyncIterator<User>('usersDeleted');
    }
}
