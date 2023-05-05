import { AxiosResponse } from "axios";

export * from "./Product";

export type BaseResponse<T> = AxiosResponse<{ data: T }>;
