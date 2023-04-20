import { component$, type Component } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import clsx from "clsx";
import type { IconProps } from "lucide-qwik/lib-types/icon-props";

export interface NavigationItemProps {
  href: string;
  name: string;
  icon?: Component<IconProps>;
}

export const NavigationItem = component$<NavigationItemProps>((props) => {
  const { url } = useLocation();
  return (
    <Link
      href={props.href}
      class={clsx(
        url.pathname === props.href
          ? "bg-main-600 text-white"
          : " hover:text-inherit hover:text-white",
        "group mx-0.5 flex items-center gap-x-3 rounded p-2 text-sm font-semibold leading-6 text-gray-600 hover:bg-main-700 dark:text-gray-400"
      )}
    >
      {props.icon ? (
        <props.icon aria-hidden="true" class={"h-5 w-5 text-inherit"} />
      ) : (
        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-main-600 text-xs font-bold uppercase text-main-600 group-hover:text-inherit group-hover:backdrop-brightness-75">
          {props.name.substring(0, 1)}
        </span>
      )}
      {props.name}
    </Link>
  );
});
