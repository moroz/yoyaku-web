export type ID = number | string;

export interface MutationResult<T, E> {
  success: boolean;
  errors: Record<keyof E, string> | null;
  data: T | null;
}
