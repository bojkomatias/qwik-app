import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <main class="h-screen overflow-y-auto bg-white py-10 text-black dark:bg-gray-950 dark:text-white">
      <div class="px-4 sm:px-6 lg:px-8">
        <Slot />
      </div>
    </main>
  );
});
