import { z } from "@builder.io/qwik-city";

export default z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  address: z.any(),
  phone: z.string(),
  website: z.string(),
  company: z.any(),
  password: z.string().min(6),
});
