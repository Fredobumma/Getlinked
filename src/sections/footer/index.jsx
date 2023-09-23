import {
	AnchorLink,
	Figure,
	Heading,
	Logo,
	Text,
	SocialAccounts,
	Stars,
} from "src/components";
import { location, phone } from "src/assets";
import { scrollToView } from "src/utilities";

export const Footer = () => {
	const navLinks = ["Overview", "Timeline", "FAQs", "Register"];

	const contacts = [
		{
			content: "+234 679 81819",
			image: phone,
			path: "tel:+234 679 81819",
			altText: "Phone icon",
		},
		{
			content: "27,Alara Street Yaba 100012 Lagos State",
			image: location,
			path: "https://www.google.com/maps/place/27+Alara+St,+Sabo+yaba+101245,+Lagos/@6.5077674,3.3844502,17z/data=!3m1!4b1!4m6!3m5!1s0x103b8cf3fae871f1:0x33fc1ca3c387cf64!8m2!3d6.5077674!4d3.3844502!16s%2Fg%2F11h2dm_gnm?entry=ttu",
			altText: "Location icon",
		},
	];

	return (
		<footer className="relative bg-[#100B20] -mx-4 px-4 py-[50px] text-left tab:-mx-8 tab:px-8 laptop:-mx-12 laptop:px-12 laptop:pt-[70px] laptop:pb-10">
			<div className="max-w-[271px] mx-auto tab:max-w-[400px] laptop:flex laptop:justify-between laptop:max-w-[1072px]">
				<div className="laptop:flex laptop:flex-col">
					<Logo />
					<Text className="!leading-[172.4%] mt-3 mb-10 text-xs tab:text-xs laptop:max-w-[412px]">
						Getlinked Tech Hackathon is a technology innovation program
						established by a group of organizations with the aim of showcasing
						young and talented individuals in the field of technology
					</Text>
					<div className="animate-bounce flex items-center gap-2.5 laptop:mt-auto">
						<Text className="!leading-[172.4%] text-center text-xs tab:text-xs laptop:text-xs">
							<AnchorLink onClick={(e) => scrollToView(e, "#policy")}>
								Terms of Use{" "}
							</AnchorLink>
						</Text>
						<span className="bg-primary inline-block h-[17px] w-0.5"></span>
						<Text className="!leading-[172.4%] text-center text-xs tab:text-xs laptop:text-xs">
							<AnchorLink onClick={(e) => scrollToView(e, "#policy")}>
								Privacy Policy
							</AnchorLink>
						</Text>
					</div>
				</div>
				<nav className="mt-8 mb-[60px] laptop:my-0">
					<Heading
						type="h4"
						className="font-semibold leading-[172.4%] text-primary text-sm"
					>
						Useful Links
					</Heading>
					<ul className="mb-3 mt-1.5 space-y-3.5 laptop:space-y-3">
						{navLinks.map((link, index) => (
							<li key={index} className="leading-[172.4%]">
								<AnchorLink
									path={`/${link.toLowerCase()}`}
									onClick={(e) => scrollToView(e, link)}
								>
									{link}
								</AnchorLink>
							</li>
						))}
					</ul>
					<SocialAccounts
						containerStyles="gap-4 items-end"
						text="Follow us"
						textStyles="tab:text-xs laptop:text-xs"
						iconStyles="gap-4"
					/>
				</nav>
				<div>
					<Heading
						type="h4"
						className="font-semibold leading-[172.4%] text-primary text-sm"
					>
						Contact Us
					</Heading>
					<ul className="inline-block mt-2.5 space-y-[22px] text-left laptop:mt-5">
						{contacts.map(({ content, image, path }, index) => (
							<li
								title="Check us out"
								key={index}
								className="flex items-start gap-4"
							>
								<Figure image={image} />
								<AnchorLink
									path={path}
									target="_blank"
									styles="-mt-1 laptop:max-w-[120px]"
								>
									{content}
								</AnchorLink>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Text className="mt-[60px] text-center text-xs tab:text-xs laptop:mt-[50px] laptop:text-xs">
				All rights reserved. &copy; getlinked Ltd.
			</Text>
			<Stars />
		</footer>
	);
};
