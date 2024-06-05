// src/app/medical-record/layout.tsx
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <div className="container mx-auto mt-12">{children}</div>
    </div>
  );
}
