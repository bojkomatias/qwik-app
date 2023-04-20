import { z } from "@builder.io/qwik-city";

export default z.object({
  email: z.string(),
  password: z.string().min(6),
});
