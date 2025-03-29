const buildSuffix = (url?: {
  query?: Record<
    string,
    string | number | boolean | Array<string | number | boolean>
  >
  hash?: string
}) => {
  const query = url?.query
  const hash = url?.hash
  if (!query && !hash) return ""
  const search = (() => {
    if (!query) return ""

    const params = new URLSearchParams()

    Object.entries(query).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, String(item)))
      } else {
        params.set(key, String(value))
      }
    })

    return `?${params.toString()}`
  })()
  return `${search}${hash ? `#${hash}` : ""}`
}

export const pagesPath = {
  $4_5th: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/4_5th" as const,
      hash: url?.hash,
      path: `/4_5th${buildSuffix(url)}`,
    }),
  },
  $4th: {
    $url: (url?: { hash?: string }) => ({
      pathname: "/4th" as const,
      hash: url?.hash,
      path: `/4th${buildSuffix(url)}`,
    }),
  },
  $url: (url?: { hash?: string }) => ({
    pathname: "/" as const,
    hash: url?.hash,
    path: `/${buildSuffix(url)}`,
  }),
}

export type PagesPath = typeof pagesPath
