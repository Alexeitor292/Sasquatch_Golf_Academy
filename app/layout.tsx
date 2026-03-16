import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sasquatch Platform",
  description:
    "Full-stack foundation for Sasquatch Golf Academy: visual page builder, admin panel, inventory, payments, and customer accounts.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
