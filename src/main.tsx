import "@/index.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider as JotaiProvider } from "jotai";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HydrateAtoms from "./atoms/HydrateAtoms";
import App from "./components/App";
import queryClient from "./utils/queryClient";
import { DevTools } from "jotai-devtools";

if (import.meta.env.PROD) {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <JotaiProvider>
        {import.meta.env.DEV && <DevTools />}
        <HydrateAtoms>
          {import.meta.env.DEV && <ReactQueryDevtools />}
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </BrowserRouter>
        </HydrateAtoms>
      </JotaiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
