import { component$ } from "@builder.io/qwik";
import { Navigation } from "./elements/navigation";
import { Link } from "@builder.io/qwik-city";
import { QrCodeIcon } from "lucide-qwik";

export const DesktopSidebar = component$(() => {
  return (
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-50 px-4 pb-4 dark:bg-gray-950">
        <div class="flex h-16 shrink-0 items-center gap-3">
          <QrCodeIcon /> <span class={"text-xl font-semibold"}>QBrand</span>
        </div>
        <Navigation />
        <div class="-mx-6 mt-auto">
          <Link
            href="/profile/"
            class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6"
          >
            <img
              class="h-8 w-8 rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span class="sr-only">Your profile</span>
            <span aria-hidden="true">Tom Cook</span>
          </Link>
        </div>
      </div>
    </div>
  );
});
