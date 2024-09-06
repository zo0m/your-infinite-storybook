export const getBoolEnv = (
    boolCandidate: string | boolean | undefined | null,
    defaultValue?: boolean
): boolean | undefined => {
    if (typeof boolCandidate === 'boolean') {
        return boolCandidate;
    }

    if (typeof boolCandidate === 'string') {
        return boolCandidate.toLowerCase() === 'true';
    }

    return defaultValue;
};
