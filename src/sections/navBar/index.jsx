import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Figure, Logo } from "src/components";
import { harmburgerMenu, closeMenu } from "src/assets";
import { scrollToView } from "src/utilities";

export const NavBar = () => {
	const [menu, setMenu] = useState(false);

	const navLinks = [
		{ title: "Timeline" },
		{ title: "Overview" },
		{ title: "FAQs" },
		{ title: "Contact", path: "/contact" },
	];

	const toggleMenu = () => setMenu(!menu);

	return (
		<nav className="border-b border-white/[0.18] bg-background fixed inset-x-0 px-4 top-0 z-50 tab:px-8 laptop:px-12 laptop:pt-10">
			<div className="flex items-center justify-between max-w-[294px] mx-auto py-5 tab:max-w-none laptop:max-w-[1256px]">
				<div className="laptop:mr-[100px]">
					<Logo />
				</div>

				<div
					onClick={toggleMenu}
					className={`absolute bg-background inset-x-0 mx-auto py-28 top-0 w-full laptop:bg-transparent laptop:inline-flex laptop:items-center laptop:justify-between laptop:max-w-[720px] laptop:ml-auto laptop:mx-0 laptop:static laptop:py-0 ${
						(menu && "block") || "hidden"
					}`}
				>
					<ul className="space-y-5 tab:space-y-[30px] laptop:space-y-0 laptop:space-x-14">
						{navLinks.map(({ title, path }, index) => (
							<li
								className="focus:text-primary hover:text-primary laptop:inline"
								key={index}
							>
								{(path && <NavLink to={path}>{title}</NavLink>) || (
									<NavLink onClick={(e) => scrollToView(e, title)}>
										{title}
									</NavLink>
								)}
							</li>
						))}
					</ul>
					<Button
						path="register"
						className="inline-block my-[30px] py-4 px-[52px] tab:my-10 laptop:my-0"
					>
						Register
					</Button>
				</div>
				<div
					className="cursor-pointer p-2.5 laptop:hidden"
					onClick={toggleMenu}
				>
					<Figure
						image={menu ? closeMenu : harmburgerMenu}
						className="relative h-5 w-5 z-10"
						altText="Menu icon"
					/>
				</div>
			</div>
		</nav>
	);
};
