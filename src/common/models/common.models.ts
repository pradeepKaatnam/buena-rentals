export interface IResposeData<T> {
    response?: T;
    errors?: string[];
    loading?: boolean;
}