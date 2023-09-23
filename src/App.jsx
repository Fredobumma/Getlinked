import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./pages";
import "./App.css";

function App() {
	const router = createBrowserRouter([
		{
			element: <Root />,
			children: [
				{
					path: "/",
					lazy: async () => ({
						Component: (await import("./pages")).Home,
					}),
				},
				{
					path: "contact",
					lazy: async () => ({
						Component: (await import("./pages")).Contact,
					}),
				},
				{
					path: "register",
					lazy: async () => ({
						Component: (await import("./pages")).Register,
					}),
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
