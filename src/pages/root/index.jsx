import { Outlet } from "react-router-dom";
import { NavBar } from "src/sections";

export const Root = () => {
	return (
		<>
			<NavBar />
			<main className="mt-[120px] laptop:mt-44">
				<Outlet />
			</main>
		</>
	);
};
