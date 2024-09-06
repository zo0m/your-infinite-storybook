import { Module } from '@nestjs/common';

import { YourInfiniteStorybookUserApiUserDataLoaderModule } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-data-loader';
import { YourInfiniteStorybookUserApiUserModelModule } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-model';
import { YourInfiniteStorybookUserApiUserResolverModule } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-resolver';
import { YourInfiniteStorybookUserApiUserServiceModule } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-service';

@Module({
    imports: [
        YourInfiniteStorybookUserApiUserResolverModule,
        YourInfiniteStorybookUserApiUserModelModule,
        YourInfiniteStorybookUserApiUserServiceModule,
        YourInfiniteStorybookUserApiUserDataLoaderModule
    ],
    exports: [
        YourInfiniteStorybookUserApiUserResolverModule,
        YourInfiniteStorybookUserApiUserModelModule,
        YourInfiniteStorybookUserApiUserServiceModule,
        YourInfiniteStorybookUserApiUserDataLoaderModule
    ]
})
export class YourInfiniteStorybookUserApiUserGraphqlModule {}
