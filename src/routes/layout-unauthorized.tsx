import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class={"bg-gray-800 text-white"}>
      <main class="py-10 h-screen overflow-auto">
        <div class="px-4 sm:px-6 lg:px-8">
          <Slot />
        </div>
      </main>
    </div>
  );
});
