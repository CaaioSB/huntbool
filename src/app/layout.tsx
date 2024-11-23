import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Provider } from "@/components/ui/provider";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "caiosb | next.js boilerplate",
  description: "The caiosb next.js boilerplate",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
