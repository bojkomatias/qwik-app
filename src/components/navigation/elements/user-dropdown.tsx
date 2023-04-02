import { component$, useSignal } from "@builder.io/qwik";
import clsx from "clsx";
import { NavigationItem } from "./navigation-item";
import { ChevronDown } from "~/components/icons";

// export interface UserDropdownProps {
//   user: string[];
// }

export const UserDropdown = component$(() => {
  const open = useSignal(true);
  return (
    <div class="relative">
      <button
        onClick$={() => (open.value = !open.value)}
        type="button"
        class="-m-1.5 flex items-center p-1.5"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="h-8 w-8 rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span class="hidden lg:flex lg:items-center">
          <span class="ml-4 text-sm font-semibold leading-6" aria-hidden="true">
            Tom Cook
          </span>
          <ChevronDown />
        </span>
      </button>
      <div
        class={clsx(
          "absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded border bg-gray-900 py-2 shadow-lg focus:outline-none transition",
          {
            "opacity-100": !open.value,
            "opacity-0": open.value,
          }
        )}
      >
        <NavigationItem href="#" name="Profile" />
        <NavigationItem href="#" name="Sign out" />
      </div>
    </div>
  );
});
