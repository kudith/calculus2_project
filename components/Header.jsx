"use client";

import {
  Logo,
  Menu,
  ConnectMedia,
  MobileMenu,
  ThemeSwitcher,
} from "components";
import { useMediaQuery } from "utils";

export function AppHeader() {
  const isMobile = useMediaQuery();

  return (
    <header className="py-5 pb-5 sticky top-0 z-10 bg-inherit shadow-sm">
      <div className="container-md">
        <div className="flex justify-between items-center gap-3">
          <Logo />
          {isMobile ? (
            // Mobile: gunakan MobileMenu
            <div className="flex items-center justify-end gap-5">
              {" "}
              {/* Kontainer untuk MobileMenu */}
              <ThemeSwitcher />
              <MobileMenu />
            </div>
          ) : (
            // Desktop: gunakan Menu
            <>
              <Menu />
              <div className="flex items-center gap-5">
                {" "}
                {/* Kontainer untuk ConnectMedia dan ThemeSwitcher */}
                <ConnectMedia />
                <ThemeSwitcher />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
