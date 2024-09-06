export const isDefined = <T>(
    value: T | null | undefined
): value is NonNullable<T> => {
    return value !== null && value !== undefined;
};

type NonNullableTuple<T extends any[]> = { [K in keyof T]: NonNullable<T[K]> }; // thanks chat-gpt :D

export const isDefinedArray = <T extends any[]>(
    values: T
): values is NonNullableTuple<T> => {
    return values.every(isDefined);
};

export const areDefined = <T extends any[]>(...values: T) => {
    return isDefinedArray(values);
};
