import { type Signal, component$ } from "@builder.io/qwik";
import { UserDropdown } from "./elements/user-dropdown";
import { SearchBar } from "./elements/search-bar";
import { Bars3Icon } from "../elements/icons";

export interface NavbarProps {
  open: Signal<boolean>;
}

export const Navbar = component$<NavbarProps>((props) => {
  return (
    <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-main-950 px-4 shadow sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        class="-m-2.5 p-2.5 lg:hidden"
        onClick$={() => (props.open.value = true)}
      >
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" />
      </button>

      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        {/* Search bar */}
        <SearchBar />

        <div class="flex items-center gap-x-4 lg:gap-x-6">
          {/* Profile dropdown */}
          <UserDropdown />
        </div>
      </div>
    </div>
  );
});
