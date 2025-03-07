import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavigationRoutes } from "./navigation-routes";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const ToggleContainer = () => {
  const { userId } = useAuth();

  return (
    <Sheet>
      <SheetTrigger className="block md:hidden">
        <Menu size={24} className="cursor-pointer text-gradient hover:text-gradient-2 transition-all duration-300 ease-in-out" aria-label="Open Menu" />
      </SheetTrigger>
      <SheetContent className="bg-gray-900 shadow-lg rounded-tl-3xl p-6">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl text-white font-extrabold tracking-tight">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav className="gap-6 flex flex-col items-start">
          <NavigationRoutes isMobile />
          {userId && (
            <NavLink
              to="/generate"
              className={({ isActive }) =>
                cn(
                  "text-lg text-white hover:text-cyan-300 transition-all duration-200 ease-in-out py-2 px-3 rounded-lg",
                  isActive && "text-cyan-200 font-semibold"
                )
              }
            >
              Take An Interview
            </NavLink>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
