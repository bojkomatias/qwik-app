import { component$, type Component } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import clsx from "clsx";
import { type IconProps } from "~/components/icons";

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
          ? "bg-gray-800 text-white"
          : "text-gray-300 hover:text-white hover:bg-gray-800",
        "group flex gap-x-3 rounded p-2 mx-0.5 text-sm leading-6 font-semibold"
      )}
    >
      {props.icon ? (
        <props.icon aria-hidden="true" />
      ) : (
        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded border bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
          {props.name.substring(0, 1)}
        </span>
      )}
      {props.name}
    </Link>
  );
});
