import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { useAuthSession, useAuthSignin, useAuthSignout } from "../plugin@auth";

export default component$(() => {
  const signOut = useAuthSignout();
  const loginForm = useAuthSignin();

  const session = useAuthSession();

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

      {session.value ? (
        <Form action={signOut}>
          <button type="submit">Sign Out</button>
          <pre>{JSON.stringify(signOut.isRunning, null, 2)}</pre>
          <pre>{JSON.stringify(signOut.value, null, 2)}</pre>
        </Form>
      ) : (
        <Form action={loginForm}>
          <input type="hidden" name="provider" value="github" />
          <button type="submit">Sign In</button>
          <pre>{JSON.stringify(signOut.isRunning, null, 2)}</pre>
          <pre>{JSON.stringify(signOut.value, null, 2)}</pre>
        </Form>
      )}

      {/* <SignInForm /> */}
    </div>
  );
});
