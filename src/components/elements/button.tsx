import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";
import clsx from "clsx";

type QwikButton = QwikIntrinsicElements["button"];
export interface ButtonProps extends QwikButton {
  var?: "main" | "outline" | "ghost" | "light";
}

export const Button = component$<ButtonProps>((props) => {
  return (
    <button
      {...props}
      class={clsx(
        "flex w-auto items-center justify-center rounded px-4 py-2 text-sm font-semibold text-gray-700 active:outline dark:text-gray-300",
        {
          "bg-main-700 text-white outline-main-700 hover:shadow-lg hover:shadow-main-700/20 hover:saturate-150 dark:text-white":
            props.var === "main",
          "border-2 border-main-700 outline-main-700 hover:border-main-700 hover:text-main-800 hover:shadow-lg hover:shadow-main-700/20":
            props.var === "outline",
          " bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700":
            props.var === "light",
          "hover:bg-gray-200 dark:hover:bg-gray-800":
            props.var === "ghost" || !props.var,
        },
        props.class
      )}
    >
      <Slot />
    </button>
  );
});
