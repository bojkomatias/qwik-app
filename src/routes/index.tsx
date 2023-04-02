import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
