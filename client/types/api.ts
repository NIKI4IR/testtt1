export interface IpCheckResponse {
  blocked: boolean
}

export interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}
