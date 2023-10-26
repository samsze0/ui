export const nextMiddlewareMatchers = {
  /*
   * Match all request paths except for the ones starting with:
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  notImage: "/((?!_next/static|_next/image|favicon.ico).*)",
};
