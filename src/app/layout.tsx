import type { Metadata } from "next";

import { Provider } from "@/components/ui/provider";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "huntbool | tchau vagas fantasmas",
  description: "uma ferramenta para você ser mais assertivo ao buscar emprego",
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
