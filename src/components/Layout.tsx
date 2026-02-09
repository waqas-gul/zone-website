// components/Layout.tsx
import type { ReactNode } from "react";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 font-sans">
      <main>{children}</main>
      <Footer />
    </div>
  );
}
