import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { type User } from "@supabase/supabase-js";

import { type NextRequest } from "next/server";

export async function supabaseAuth(req: NextRequest): Promise<NextResponse> {
  const res = NextResponse.next();
  const authResult = await getUser(req, res);

  if (authResult.error)
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 }
    );

  return res;
}

interface AuthResult {
  user: User | null;
  error: string | null;
}

async function getUser(
  req: NextRequest,
  res: NextResponse
): Promise<AuthResult> {
  const supabase = createMiddlewareClient({ req, res });

  const userResponse = await supabase.auth.getUser();

  if (userResponse.error)
    return {
      user: null,
      error: userResponse.error.message,
    };

  return {
    user: userResponse.data.user,
    error: null,
  };
}
