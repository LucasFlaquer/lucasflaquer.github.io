import { RouterProvider } from "react-router";

import LocaleProvider from "@/components/layout/locale-provider.tsx";
import ThemeProvider from "@/components/layout/theme-provider.tsx";
import { router } from "@/router.ts";

const App = () => (
  <LocaleProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </LocaleProvider>
);

export default App;
