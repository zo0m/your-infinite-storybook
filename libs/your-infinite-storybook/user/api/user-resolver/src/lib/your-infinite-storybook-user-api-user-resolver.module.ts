import { Module } from '@nestjs/common';

import { YourInfiniteStorybookUserApiUserDataLoaderModule } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-data-loader';
import { YourInfiniteStorybookUserApiUserServiceModule } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-service';

import { UsersResolver } from './user-resolver';

@Module({
    imports: [
        YourInfiniteStorybookUserApiUserServiceModule,
        YourInfiniteStorybookUserApiUserDataLoaderModule
    ],
    providers: [UsersResolver],
    exports: [UsersResolver]
})
export class YourInfiniteStorybookUserApiUserResolverModule {}
