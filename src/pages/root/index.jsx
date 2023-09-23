import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NavBar } from "src/sections";
import "react-toastify/dist/ReactToastify.css";

export const Root = () => {
	return (
		<>
			<NavBar />
			<main className="mt-[120px] laptop:mt-44">
				<ToastContainer />
				<Outlet />
			</main>
		</>
	);
};
