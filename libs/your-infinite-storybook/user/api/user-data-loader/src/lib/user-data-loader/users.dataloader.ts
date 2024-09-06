import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import * as _ from 'lodash';
import {
    DeepPartial,
    FindManyOptions,
    FindOneOptions,
    In,
    Repository
} from 'typeorm';

import { BaseDataLoader } from '@your-infinite-storybook/shared/utils/base-dataloader';
import { User } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-model';
import { UsersService } from '@your-infinite-storybook/your-infinite-storybook/user/api/user-service';

@Injectable()
export class UsersDataLoader extends BaseDataLoader<User> {
    constructor(private readonly usersService: UsersService) {
        super(usersService);
    }
}
