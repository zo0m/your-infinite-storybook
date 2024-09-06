import { Module } from '@nestjs/common';

import { YourInfiniteStorybookUserApiUserServiceModule } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-service';

import { UsersDataLoader } from './user-data-loader';

@Module({
    imports: [YourInfiniteStorybookUserApiUserServiceModule],
    providers: [UsersDataLoader],
    exports: [UsersDataLoader]
})
export class YourInfiniteStorybookUserApiUserDataLoaderModule {}
