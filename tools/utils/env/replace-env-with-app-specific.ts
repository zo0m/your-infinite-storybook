export const replaceEnvWithAppSpecific = (
    appName: string,
    env: typeof process.env
) => {
    const appNameAsConst = appName.toUpperCase().replace(/-/g, '_');
    const appPrefix = new RegExp(`^${appNameAsConst}_`, 'i');

    const processEnvAppKeys = Object.keys(env).filter((key) =>
        appPrefix.test(key)
    );

    for (const key of processEnvAppKeys) {
        const commonKey = key.replace(appPrefix, '');
        env[commonKey] = env[key];
    }

    return env;
};
