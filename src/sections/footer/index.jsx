import {
	facebook,
	instagram,
	linkedIn,
	location,
	phone,
	x_twitter,
} from "src/assets";
import { Figure, Heading, Logo, Text } from "src/components";

export const Footer = () => {
	const navLinks = ["Overview", "Timeline", "FAQs", "Register"];

	const socialAccounts = [
		{
			title: "Instagram logo",
			image: instagram,
			path: "https://www.instagram.com/",
		},
		{
			title: "X-twitter logo",
			image: x_twitter,
			path: "https://twitter.com/getLinkedai",
		},
		{
			title: "Facebook logo",
			image: facebook,
			path: "https://www.facebook.com/",
		},
		{
			title: "LinkedIn logo",
			image: linkedIn,
			path: "https://ng.linkedin.com/company/getlinked-ai?trk=public_post_main-feed-card_reshare_feed-actor-name",
		},
	];

	const contacts = [
		{ content: "+234 679 81819", image: phone, path: "tel:+234 679 81819" },
		{
			content: "27,Alara Street Yaba 100012 Lagos State",
			image: location,
			path: "https://www.google.com/maps/place/27+Alara+St,+Sabo+yaba+101245,+Lagos/@6.5077674,3.3844502,17z/data=!3m1!4b1!4m6!3m5!1s0x103b8cf3fae871f1:0x33fc1ca3c387cf64!8m2!3d6.5077674!4d3.3844502!16s%2Fg%2F11h2dm_gnm?entry=ttu",
		},
	];

	return (
		<footer className="bg-[#100B20] -mx-4 px-4 py-[50px] text-left tab:-mx-8 tab:px-8 laptop:-mx-12 laptop:px-12 laptop:pt-[70px] laptop:pb-10">
			<div className="max-w-[271px] mx-auto tab:max-w-[400px] laptop:flex laptop:justify-between laptop:max-w-[1072px]">
				<div className="laptop:flex laptop:flex-col">
					<Logo />
					<Text className="!leading-[172.4%] mt-3 mb-10 text-xs tab:text-xs laptop:max-w-[412px] laptop:text-xs">
						Getlinked Tech Hackathon is a technology innovation program
						established by a group of organizations with the aim of showcasing
						young and talented individuals in the field of technology
					</Text>
					<div className="flex items-center gap-2.5 laptop:mt-auto">
						<Text className="!leading-[172.4%] text-center text-xs tab:text-xs laptop:text-xs">
							Terms of Use
						</Text>
						<span className="bg-primary inline-block h-[17px] w-0.5"></span>
						<Text className="!leading-[172.4%] text-center text-xs tab:text-xs laptop:text-xs">
							Privacy Policy
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
								<a href="/">{link}</a>
							</li>
						))}
					</ul>
					<div className="flex gap-4 items-end">
						<Text className="text-primary text-xs tab:text-xs laptop:text-xs">
							Follow us
						</Text>
						<nav className="flex items-center gap-4">
							{socialAccounts.map(({ title, image, path }) => (
								<a href={path}>
									<img src={image} alt={title} />
								</a>
							))}
						</nav>
					</div>
				</nav>
				<div>
					<Heading
						type="h4"
						className="font-semibold leading-[172.4%] text-primary text-sm"
					>
						Contact Us
					</Heading>
					<ul className="inline-block mt-2.5 space-y-[22px] text-left laptop:mt-5">
						{contacts.map(({ content, image, path }) => (
							<li className="flex items-start gap-4">
								<Figure image={image} />
								<a href={path} className="laptop:max-w-[120px]">
									{content}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Text className="mt-[60px] text-center text-xs tab:text-xs laptop:mt-[50px] laptop:text-xs">
				All rights reserved. &copy; getlinked Ltd.
			</Text>
		</footer>
	);
};
