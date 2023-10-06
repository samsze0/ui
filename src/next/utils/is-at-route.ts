export function isAtRoute(pathname: string, routes: string[]) {
  return routes.some((route) => pathname.startsWith(route))
}