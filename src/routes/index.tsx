import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      excepturi aspernatur eos, sint atque quaerat quae sit dignissimos aliquid
      distinctio earum id nihil itaque. Delectus alias officia recusandae magnam
      culpa!
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
