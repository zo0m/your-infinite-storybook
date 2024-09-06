// from https://nx-dev-git-fork-jaysoo-docs-env-vars-nrwl.vercel.app/guides/environment-variables#using-environment-variables-in-angular-applications
import { Configuration, DefinePlugin } from 'webpack';

import { replaceEnvWithAppSpecific } from '../env/replace-env-with-app-specific';

const { merge } = require('webpack-merge');

export function getClientEnvironment(keysWhiteList: string[]) {
    const appName = process.env.NX_TASK_TARGET_PROJECT!;
    const appNameAsConst = appName.toUpperCase().replace(/-/g, '_');
    const appPrefix = new RegExp(`^${appNameAsConst}_`, 'i');

    const baseEnv: Record<string, string> = {};

    const nodeEnv =
        process.env.NODE_ENV || process.env.NX_TASK_TARGET_CONFIGURATION;

    if (nodeEnv !== undefined) {
        baseEnv['NODE_ENV'] = nodeEnv;
    }

    const rawEnv = Object.keys(process.env)
        .filter((key) => appPrefix.test(key))
        .concat(...keysWhiteList)
        .filter((key) => process.env[key] !== undefined)
        .reduce((env, key) => {
            env[key] = process.env[key]!;
            return env;
        }, baseEnv);

    replaceEnvWithAppSpecific(appName, rawEnv);

    const emptyEnv: Record<string, string> = {};

    return {
        'process.env': Object.keys(rawEnv).reduce((env, key) => {
            env[key] = JSON.stringify(rawEnv[key]);
            return env;
        }, emptyEnv)
    };
}

export const withEnvDefined = (keysWhiteList: string[] = []) => {
    return (config: Configuration) => {
        return merge(config, {
            plugins: [new DefinePlugin(getClientEnvironment(keysWhiteList))]
        });
    };
};
