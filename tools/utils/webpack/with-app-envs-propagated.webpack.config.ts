import type { Configuration } from 'webpack';

import { replaceEnvWithAppSpecific } from '../env/replace-env-with-app-specific';

export const withAppEnvsPropagated = () => {
    return (config: Configuration) => {
        const appName = process.env.NX_TASK_TARGET_PROJECT!;

        replaceEnvWithAppSpecific(appName, process.env);
        return config;
    };
};
