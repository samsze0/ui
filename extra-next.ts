// Middleware

import { addPathnameToHeaders } from "@@/extra/middleware/add-pathname-to-headers";
import { nextMiddlewareMatchers } from "@@/extra/middleware/matcher";
import { supabaseAuth } from "@@/extra/middleware/supabase-auth";

// Routes

import { supabaseAuthCallbackRoute } from "@@/extra/routes/supabase-auth-callback";

// Others

import { generateNextMetadata } from "@@/extra/generate-next-metadata";
import {
  NextLayout,
  NextAppContainer,
  NextAppBody,
} from "@@/extra/next-layout";

export {
  addPathnameToHeaders,
  supabaseAuth,
  generateNextMetadata,
  supabaseAuthCallbackRoute,
  NextLayout,
  NextAppContainer,
  NextAppBody,
  nextMiddlewareMatchers,
};
