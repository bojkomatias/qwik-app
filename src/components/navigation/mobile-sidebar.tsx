import { type Signal, component$ } from "@builder.io/qwik";
import clsx from "clsx";
import { Navigation } from "./elements/navigation";

export interface MobileSidebarProps {
  open: Signal<boolean>;
}

export const MobileSidebar = component$<MobileSidebarProps>((props) => {
  return (
    <div
      class="relative z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      window:onKeyDown$={(e) => {
        if (e.key === "Escape") props.open.value = false;
      }}
    >
      <div
        class={clsx("fixed inset-0 bg-black/50 backdrop-blur", {
          hidden: !props.open.value,
        })}
      />

      <div
        class={clsx("fixed inset-0 flex", {
          "pointer-events-none": !props.open.value,
        })}
      >
        <div
          class={clsx("relative mr-16 flex w-full max-w-xs flex-1 transition", {
            "-translate-x-full": !props.open.value,
            "translate-x-0": props.open.value,
          })}
        >
          <div
            class={clsx(
              "absolute left-full top-0 flex w-16 justify-center pt-5 transition",
              {
                "opacity-0": !props.open.value,
                "opacity-100": props.open.value,
              }
            )}
          >
            <button
              type="button"
              class="-m-2.5 p-2.5"
              onClick$={() => (props.open.value = false)}
            >
              <span class="sr-only">Close sidebar</span>
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div
            class="flex grow flex-col gap-y-5 overflow-y-auto bg-main-950 px-6 pb-4 text-white"
            onClick$={() =>
              setTimeout(() => {
                props.open.value = false;
              }, 50)
            }
          >
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
      </div>
    </div>
  );
});
