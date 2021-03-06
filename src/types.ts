export type RequiredKeepUndefined<T> = { [K in keyof T]-?: [T[K]] } extends infer U
  ? U extends Record<keyof U, [any]> ? { [K in keyof U]: U[K][0] } : never
  : never;