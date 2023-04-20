import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class={"prose dark:prose-invert"}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
      />
      <Slot />
    </div>
  );
});
