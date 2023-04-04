import { component$, Slot, useSignal } from "@builder.io/qwik";
import { DesktopSidebar } from "~/components/navigation/desktop-sidebar";
import { MobileSidebar } from "~/components/navigation/mobile-sidebar";
import { Navbar } from "~/components/navigation/navbar";

export default component$(() => {
  const sidebarOpen = useSignal(false);

  return (
    // This text-white prevents theme from breaking if you go light-mode and change text to black
    <div class={" text-white"}>
      <MobileSidebar open={sidebarOpen} />
      <DesktopSidebar />
      <div class={"lg:pl-72"}>
        <Navbar open={sidebarOpen} />
        {/* // Modify from here if dark: is allowed */}
        <main class="h-screen overflow-y-auto bg-white py-10 text-black dark:bg-gray-900 dark:text-white">
          <div class="px-4 sm:px-6 lg:px-8">
            <Slot />
          </div>
        </main>
      </div>
    </div>
  );
});
