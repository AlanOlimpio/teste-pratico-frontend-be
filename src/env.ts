import { z } from "zod";

const envSchema = z.object({
  MODE: z.enum(["production", "development"]),
  VITE_BACK_END_URL: z.string(),
});

export const env = envSchema.parse(import.meta.env);
