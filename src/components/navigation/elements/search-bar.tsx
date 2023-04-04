import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";

export const SearchBar = component$(() => {
  return (
    <Form class="relative flex flex-1">
      <label for="search" class="sr-only">
        Quick search
      </label>
      <div class="relative mt-2 flex w-full items-center">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          class={"ring-offset-main-950 focus:ring-offset-main-950"}
        />
        <div class="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd class="inline-flex items-center rounded px-1 font-sans text-xs ">
            ⌘K
          </kbd>
        </div>
      </div>
    </Form>
  );
});
