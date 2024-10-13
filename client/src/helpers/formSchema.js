import { z } from "zod";
export const linkSchema = z.object({
    fullUrl: z.string().url(),
  });