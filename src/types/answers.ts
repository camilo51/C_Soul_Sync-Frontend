export type SuccessType<T = Record<string, unknown>> = {
    success: true;
    message: string;
    data: T;
};

export type ErrorType = {
    success: false;
    message: string;
};