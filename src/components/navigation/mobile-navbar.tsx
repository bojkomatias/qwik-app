import { type Signal, component$ } from "@builder.io/qwik";
import { Button } from "../elements/button";
import { Link } from "@builder.io/qwik-city";
import { MenuIcon } from "lucide-qwik";

export interface NavbarProps {
  open: Signal<boolean>;
}

export const MobileNavbar = component$<NavbarProps>((props) => {
  return (
    <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-gray-50 px-4 shadow dark:bg-gray-900 sm:gap-x-6 sm:px-6 lg:hidden lg:px-8">
      <Button
        type="button"
        class="-m-2.5 p-2.5 lg:hidden"
        onClick$={() => (props.open.value = true)}
      >
        <span class="sr-only">Open sidebar</span>
        <MenuIcon aria-hidden="true" />
      </Button>

      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        {/* Search bar */}
        {/* <SearchBar /> */}
      </div>

      <div class="flex items-center gap-x-4 lg:gap-x-6">
        <Link
          href="/profile/"
          class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6"
        >
          <img
            class="h-8 w-8 rounded-full bg-gray-50"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
});
