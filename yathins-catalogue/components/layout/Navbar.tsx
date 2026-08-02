"use client";

import * as React from "react";
import { DesktopNavbar } from "./DesktopNavbar";
import { MobileNavbar } from "./MobileNavbar";

export interface NavbarProps {
  className?: string;
}

/**
 * Navbar — Master Layout Component
 *
 * Renders DesktopNavbar (lg:block) and MobileNavbar (lg:hidden) as separate components.
 * Visibility switching is handled entirely via CSS media queries to eliminate layout mutation bugs.
 */
export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <>
      <DesktopNavbar className={className} />
      <MobileNavbar className={className} />
    </>
  );
};

Navbar.displayName = "Navbar";
