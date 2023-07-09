import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import { AuthProvider } from "./context/AuthProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={new QueryClient()}>
				<AuthProvider>
					<Routes>
						<Route path="/*" element={<App />} />
					</Routes>
					<ReactQueryDevtools />
				</AuthProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
);
