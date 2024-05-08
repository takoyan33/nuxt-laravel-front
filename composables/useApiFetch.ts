import type { UseFetchOptions } from "#app"

export function useApiFetch<T> (path: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {}

  const token = useCookie("XSRF-TOKEN");

  if(token.value) {
    headers["X-XSRF-TOKEN"] = token.value as string
  }

  if(process.server){
    headers = {
      ...headers,
      ...useRequestHeaders(["referer", "cookie"])
    }
  }

  return useFetch("http://localhost" + path, {
    credentials: "include",
    ...options,
    headers: {
      ...headers,
      ...options?.headers
    },
  });
}