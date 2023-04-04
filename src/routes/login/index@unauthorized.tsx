import { component$ } from "@builder.io/qwik";
import { routeAction$, z, zod$ } from "@builder.io/qwik-city";
import { SignInForm } from "~/components/auth/sign-in-form";

export const useSignIn = routeAction$(({ email, password }) => {
  if (email === "admin@admin.com" && password === "admin123") {
    return { success: true };
  }
  return { success: false, message: "Credentials don't match" };
}, zod$({ email: z.string().min(5), password: z.string().min(8) }));

export default component$(() => {
  return (
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          class="mx-auto h-12 w-12"
          src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=700"
          alt="Your Company"
        />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-400">
          Or
          <a
            href="#"
            class="ml-1 font-medium text-main-800 hover:text-main-700"
          >
            start your 14-day free trial
          </a>
        </p>
      </div>
      <SignInForm />
    </div>
  );
});
