import { type QwikIntrinsicElements, component$, Slot } from "@builder.io/qwik";
import clsx from "clsx";

type QwikButton = QwikIntrinsicElements["button"];
export interface ButtonProps extends QwikButton {
  var?: "main" | "outline" | "ghost" | "basic";
}

export const Button = component$<ButtonProps>((props) => {
  return (
    <button
      {...props}
      class={clsx(
        "flex w-auto items-center justify-center rounded px-5 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900",
        {
          "bg-main-800 hover:shadow-lg hover:shadow-main-800/20 hover:saturate-150":
            props.var === "main",
          "hover:bg-gray-800 focus:ring-gray-800":
            props.var === "ghost" || !props.var,
          " ring ring-gray-800 ring-offset-0 hover:ring-inherit focus:ring-inherit":
            props.var === "outline",
          "pl-2 pr-2 ring-0 ring-offset-0 hover:bg-gray-500/20 focus:ring-0 focus:ring-offset-0":
            props.var === "basic",
        },
        props.class
      )}
    >
      <Slot />
    </button>
  );
});
