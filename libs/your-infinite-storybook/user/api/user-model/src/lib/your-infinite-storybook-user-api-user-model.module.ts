import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user-model';

const UserModelModule = TypeOrmModule.forFeature([User]);

@Module({
    imports: [UserModelModule],
    exports: [UserModelModule]
})
export class YourInfiniteStorybookUserApiUserModelModule {}
