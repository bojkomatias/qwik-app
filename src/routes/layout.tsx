import { component$, Slot, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { DesktopSidebar } from "~/components/navigation/desktop-sidebar";
import { MobileSidebar } from "~/components/navigation/mobile-sidebar";
import { Navbar } from "~/components/navigation/navbar";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const sidebarOpen = useSignal(false);
  return (
    <div class={"bg-gray-800 text-white"}>
      <MobileSidebar open={sidebarOpen} />
      <DesktopSidebar />
      <div class={"lg:pl-72"}>
        <Navbar open={sidebarOpen} />
        <main class="py-10 h-screen overflow-auto">
          <div class="px-4 sm:px-6 lg:px-8">
            <Slot />
          </div>
        </main>
      </div>
    </div>
  );
});
