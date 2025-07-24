// src/layout/MainLayout.tsx
import React from "react";
import NavBar from "./NavBar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
