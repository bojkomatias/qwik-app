import { component$ } from "@builder.io/qwik";
import { Navigation } from "./elements/navigation";

export const DesktopSidebar = component$(() => {
  return (
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-main-900/50 bg-main-950 px-6 pb-4 shadow">
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=700"
            alt="Your Company"
          />
        </div>
        <Navigation />
      </div>
    </div>
  );
});
