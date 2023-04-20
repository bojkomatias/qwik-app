import { component$ } from "@builder.io/qwik";
import { NavigationItem } from "./navigation-item";
import * as Icons from "lucide-qwik";

const navigation = [
  { name: "Dashboard", href: "/", icon: Icons.HomeIcon },
  { name: "Team", href: "/users/", icon: Icons.UsersIcon },
  { name: "Projects", href: "/this", icon: Icons.FileTerminalIcon },
  { name: "Calendar", href: "#", icon: Icons.CalendarCheckIcon },
  { name: "Documents", href: "#", icon: Icons.ArchiveIcon },
];
const teams = [
  { id: 1, name: "pqlub", href: "#" },
  { id: 2, name: "bojkomatias", href: "#" },
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
      </ul>
    </nav>
  );
});
