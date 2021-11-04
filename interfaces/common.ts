export type ID = number | string;

export interface MutationResult<T, E = Partial<T>> {
  success: boolean;
  errors: Record<keyof E, string> | null;
  data: T | null;
}
