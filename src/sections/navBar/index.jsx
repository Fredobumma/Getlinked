import { useState } from "react";
import { Button, Figure, Logo } from "src/components";
import { harmburgerMenu, closeMenu } from "src/assets";

export const NavBar = () => {
	const [menu, setMenu] = useState(false);

	const navLinks = ["Timeline", "Overview", "FAQs", "Contact"];

	return (
		<nav className="bg-background fixed inset-x-0 px-4 top-0 z-50 tab:px-8 laptop:px-12 laptop:pt-10">
			<div className="flex items-center justify-between max-w-[294px] mx-auto py-5 tab:max-w-[540px] laptop:max-w-[1256px]">
				<div className="laptop:mr-[100px]">
					<Logo />
				</div>

				<div
					className={`absolute bg-background inset-x-0 mx-auto py-28 top-0 w-full laptop:bg-transparent laptop:inline-flex laptop:items-center laptop:justify-between laptop:max-w-[720px] laptop:ml-auto laptop:mx-0 laptop:static laptop:py-0 ${
						(menu && "block") || "hidden"
					}`}
				>
					<ul className="space-y-5 tab:space-y-[30px] laptop:space-y-0 laptop:space-x-14">
						{navLinks.map((link, index) => (
							<li className="laptop:inline" key={index}>
								<a href="/">{link}</a>
							</li>
						))}
					</ul>
					<Button className="inline-block my-[30px] py-4 px-[52px] tab:my-10 laptop:my-0">
						Register
					</Button>
				</div>
				<div className="p-2.5 laptop:hidden" onClick={() => setMenu(!menu)}>
					<Figure
						image={menu ? closeMenu : harmburgerMenu}
						className="relative h-5 w-5 z-10"
					/>
				</div>
			</div>
		</nav>
	);
};
