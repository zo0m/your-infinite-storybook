import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Message } from './message-model';

const MessageModelModule = TypeOrmModule.forFeature([Message]);

@Module({
    imports: [MessageModelModule],
    exports: [MessageModelModule]
})
export class YourInfiniteStorybookMessageApiMessageModelModule {}
