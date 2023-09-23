import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";

import { Error, NotFound, Root } from "./pages";
import "./App.css";

function App() {
	const router = createBrowserRouter([
		{
			element: <Root />,
			errorElement: <Error />,
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
				{ path: "/not-found", element: <NotFound /> },
				{ path: "*", element: <Navigate to="/not-found" /> },
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
