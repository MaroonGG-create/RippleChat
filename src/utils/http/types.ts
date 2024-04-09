import type { AxiosResponse, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios'

export interface BaseRequestInterceptors<T = AxiosResponse<any>> {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface BaseRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: BaseRequestInterceptors<T>
  loading?: boolean | string
  noToken?: boolean
}