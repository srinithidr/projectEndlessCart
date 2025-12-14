// app/api/inngest/route.js
import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserUpdation, syncUserDeletion } from "@/config/inngest";

// IMPORTANT: Required for Next.js 16 + Vercel
export const runtime = "nodejs";

// Export API handlers for GET/POST
export const { GET, POST } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
});
