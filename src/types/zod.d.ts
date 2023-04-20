import type { z } from "@builder.io/qwik-city";
import type userSchema from "~/zod/user-schema";

export {};
declare global {
  type User = z.infer<typeof userSchema>;
}
