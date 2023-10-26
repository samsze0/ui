import { NextResponse } from "next/server";

import { type NextRequest } from "next/server";

export function addPathnameToHeaders(req: NextRequest): NextResponse | null {
  const isApiRoute = req.nextUrl.pathname.startsWith("/api");

  if (isApiRoute) return null;

  const requestHeaders = new Headers(req.headers);

  // Store current request pathname in a custom header. Because
  // NextJS doesn't support getting the pathname in server components
  requestHeaders.set("x-pathname", req.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
