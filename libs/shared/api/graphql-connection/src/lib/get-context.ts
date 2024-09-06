import { extendContextWithDataLoader } from '@your-infinite-storybook/shared/api/graphql-dataloader-extend-context';

export const getContext = ({ req, connection }) => {
    const ctx = extendContextWithDataLoader({ req }) as any;
    // subscriptions
    if (connection) {
        ctx.req = { headers: connection.context };
    }

    return ctx;
};
