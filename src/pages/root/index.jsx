import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NavBar } from "src/sections";

export const Root = () => {
	return (
		<>
			<NavBar />
			<ToastContainer />
			<main className="mt-[120px] laptop:mt-44">
				<Outlet />
			</main>
		</>
	);
};
