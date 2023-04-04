import { component$, type Component } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import clsx from "clsx";
import { type IconProps } from "~/components/elements/icons";

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
          ? "bg-main-900"
          : "text-gray-200 hover:bg-main-900 hover:text-inherit",
        "group mx-0.5 flex gap-x-3 rounded p-2 text-sm font-semibold leading-6"
      )}
    >
      {props.icon ? (
        <props.icon aria-hidden="true" />
      ) : (
        <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-main-800 bg-main-900 text-[0.625rem] font-medium text-gray-400 group-hover:bg-main-950 group-hover:text-inherit">
          {props.name.substring(0, 1)}
        </span>
      )}
      {props.name}
    </Link>
  );
});
