import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className="w-full bg-white shadow-md transition-all duration-150 ease-in-out">
      <Container>
        <div className="flex items-center justify-between w-full py-2">
          {/* Left Section (Logo & Navigation) */}
          <div className="flex items-center gap-6">
            <LogoContainer />
            <nav className="hidden md:flex items-center gap-4">
              <NavigationRoutes />
              {userId && (
                <NavLink
                  to={"/generate"}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-medium px-4 py-2 rounded-md transition-all duration-300",
                      isActive
                        ? "text-white bg-accent-foreground font-semibold border-b-2 border-accent"
                        : "text-gray-700 hover:bg-accent-foreground hover:text-white"
                    )
                  }
                >
                  Take An Interview
                </NavLink>
              )}
            </nav>
          </div>

          {/* Right Side (Profile & Toggle) */}
          <div className="flex items-center gap-4">
            <ProfileContainer />
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
