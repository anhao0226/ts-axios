export type Method =
  | 'GET'
  | 'get'
  | 'POST'
  | 'post'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'OPTION'
  | 'option'
  | 'HEADER'
  | 'header'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse<T = any> {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> { }

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}

export interface Axios {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse>
  }
  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  option<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  <T = any>(url: string, config: AxiosRequestConfig): AxiosPromise<T>
}

export interface ResolvedFn<T> {
  (val: T): T | Promise<T>
}

export interface RejectedFn<T> {
  (val: T): T | Promise<T>
}

export interface AxiosInterceptorManager<T> {
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn<T>): number
  eject(id: number): void
}
