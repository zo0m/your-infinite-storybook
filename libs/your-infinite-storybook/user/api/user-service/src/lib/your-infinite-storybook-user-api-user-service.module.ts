import { Module } from '@nestjs/common';

import { YourInfiniteStorybookUserApiUserModelModule } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-model';

import { UsersService } from './user-service';

@Module({
    imports: [YourInfiniteStorybookUserApiUserModelModule],
    providers: [UsersService],
    exports: [UsersService]
})
export class YourInfiniteStorybookUserApiUserServiceModule {}
