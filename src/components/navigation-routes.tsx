import { MainRoutes } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface NavigationRoutesProps {
  isMobile?: boolean;
}

export const NavigationRoutes = ({ isMobile = false }: NavigationRoutesProps) => {
  return (
    <ul
      className={cn(
        "flex items-center gap-4 text-base font-medium text-gray-700",
        isMobile && "flex-col gap-6 items-start text-lg"
      )}
    >
      {MainRoutes.map((route) => (
        <NavLink
          key={route.href}
          to={route.href}
          className={({ isActive }) =>
            cn(
              "transition-all duration-300 px-4 py-2 rounded-md hover:bg-accent-foreground hover:text-white",
              isActive
                ? "text-white bg-accent-foreground font-semibold border-b-2 border-accent"
                : "text-gray-700"
            )
          }
        >
          {route.label}
        </NavLink>
      ))}
    </ul>
  );
};
