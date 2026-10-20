import { RouterProvider } from "react-router";

import LocaleProvider from "@/components/layout/locale-provider.tsx";
import { router } from "@/router.ts";

const App = () => (
  <LocaleProvider>
    <RouterProvider router={router} />
  </LocaleProvider>
);

export default App;
