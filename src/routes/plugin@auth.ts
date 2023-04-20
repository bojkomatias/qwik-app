import { serverAuth$ } from "@builder.io/qwik-auth";
import GitHub from "@auth/core/providers/github";
import type { Provider } from "@auth/core/providers";

export const { useAuthSession, useAuthSignin, useAuthSignout, onRequest } =
  serverAuth$(({ env }) => ({
    secret: "matute",
    trustHost: true,
    providers: [
      GitHub({
        clientId: env.get("GITHUB_ID")!,
        clientSecret: env.get("GITHUB_SECRET")!,
      }),
    ] as Provider[],
  }));
