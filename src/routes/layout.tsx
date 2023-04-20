import { component$, Slot, useSignal } from "@builder.io/qwik";
import { DesktopSidebar } from "~/components/navigation/desktop-sidebar";
import { MobileSidebar } from "~/components/navigation/mobile-sidebar";
import { MobileNavbar } from "~/components/navigation/mobile-navbar";

export default component$(() => {
  const sidebarOpen = useSignal(false);

  return (
    <div class={"text-black dark:text-white"}>
      <MobileSidebar open={sidebarOpen} />
      <DesktopSidebar />
      <div class={"lg:pl-64"}>
        <MobileNavbar open={sidebarOpen} />
        {/* // Modify from here if dark: is allowed */}
        <main class="container mx-auto h-screen overflow-y-auto bg-white py-10 dark:bg-gray-900 ">
          <div class="px-4 sm:px-6 lg:px-8">
            <Slot />
          </div>
        </main>
      </div>
    </div>
  );
});
