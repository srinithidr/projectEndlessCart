import { serve } from "inngest/next";
import { inngest } from "@/config/inngest";
import { createClient } from 'inngest';

// VERY IMPORTANT FOR VERCEL + NEXT 16
export const runtime = "nodejs";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [],
});
