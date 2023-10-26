export type PrefixProperties<T extends string, U> = {
  [K in keyof U as `${T}${Capitalize<K & string>}`]: U[K];
};
