import { Suspense } from "react";
import { AppHeader, AppFooter } from "components";
import Loading from "./loading";
import "styles/globals.css";
import { ThemeContext } from "context";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContext>
          <AppHeader />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <AppFooter />
        </ThemeContext>
      </body>
    </html>
  );
}
