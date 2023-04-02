import { component$ } from "@builder.io/qwik";
import { NavigationItem } from "./navigation-item";
import { HomeIcon } from "~/components/icons";

const navigation = [
  { name: "Dashboard", href: "/", icon: HomeIcon },
  { name: "Team", href: "/users/" },
  { name: "Projects", href: "#" },
  { name: "Calendar", href: "/calendar/" },
  { name: "Documents", href: "#" },
  { name: "Reports", href: "#" },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#" },
  { id: 2, name: "Tailwind Labs", href: "#" },
  { id: 3, name: "Workcation", href: "#" },
];

export const Navigation = component$(() => {
  return (
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavigationItem
                  href={item.href}
                  name={item.name}
                  icon={item.icon}
                />
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div class="text-xs font-semibold leading-6 text-gray-400">
            Your teams
          </div>
          <ul role="list" class="-mx-2 mt-2 space-y-1">
            {teams.map((team) => (
              <li key={team.name}>
                <NavigationItem href={team.href} name={team.name} />
              </li>
            ))}
          </ul>
        </li>
        <li class="mt-auto">
          <a
            href="#"
            class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <HomeIcon class="h-6 w-6 shrink-0" aria-hidden="true" />
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
});