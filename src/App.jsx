import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import AOS from "aos";
import { Error, NotFound, Root } from "./pages";
import "aos/dist/aos.css";
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

	AOS.init();

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
