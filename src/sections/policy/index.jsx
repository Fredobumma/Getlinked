import {
	Heading,
	Picture,
	Text,
	Button,
	Figure,
	Gradient,
	Stars,
} from "src/components";
import { policy_2x, policy_1x, terms_list } from "src/assets";

export const Policy = () => {
	const listItems = [
		"The Standard License grants you a non-exclusive right to navigate and register for our event",
		"You are licensed to use the item available at any free source sites, for your project developement",
	];

	return (
		<section
			id="policy"
			className="relative border-t border-white/[0.18] flex flex-col items-center justify-center -mx-4 pb-20 pt-[70px] px-4 tab:flex-row tab:gap-[50px] tab:-mx-8 tab:px-8 laptop:-mx-12 laptop:pb-40 laptop:pt-[92px] laptop:px-12"
		>
			<div className="max-w-[320px] w-full tab:text-left tab:max-w-[420px] tab:w-1/2 laptop:max-w-[540px]">
				<Heading
					type="h2"
					className="font-heading font-bold text-xl tab:text-2xl tab:mb-3.5 laptop:text-[32px] laptop:leading-normal laptop:mb-4"
				>
					Privacy Policy and
					<p className="text-primary">Terms</p>
				</Heading>
				<Text className="!leading-[27.5px] opacity-75 text-xs tab:text-sm laptop:text-sm laptop:!leading-[27.5px]">
					Last updated on September 12, 2023
				</Text>
				<Text className="!leading-[188.4%] max-w-[300px] my-[30px] mx-auto text-xs tab:mx-0 tab:max-w-[400px] tab:text-sm laptop:mb-[70px] laptop:text-sm laptop:!leading-[27.5px] laptop:max-w-[440px]">
					Below are our privacy & policy, which outline a lot of goodies. it’s
					our aim to always take of our participant
				</Text>
				<div className="rounded-5px border border-primary bg-[#d9d9d9]/[.03] mb-12 px-3.5 py-12 text-left w-full tab:mb-0 laptop:py-[60px]">
					<div className="max-w-[270px] mx-auto tab:max-w-[360px] laptop:max-w-[420px]">
						<Text className="!leading-[216.4%] text-center text-xs tab:text-sm  laptop:text-sm laptop:!leading-[27.5px]">
							At getlinked tech Hackathon 1.0, we value your privacy and are
							committed to protecting your personal information. This Privacy
							Policy outlines how we collect, use, disclose, and safeguard your
							data when you participate in our tech hackathon event. By
							participating in our event, you consent to the practices described
							in this policy.
						</Text>
						<Heading
							type="h3"
							className="font-bold mt-5 mb-1.5 text-[13px] text-primary tab:text-base laptop:mt-6"
						>
							Licensing Policy
						</Heading>
						<Text className="font-bold !leading-[188.4%] mb-5 text-xs tab:text-sm laptop:text-sm laptop:!leading-[27.5px]">
							Here are terms of our Standard License:
						</Text>
						<ul>
							{listItems.map((item, index) => (
								<li
									key={index}
									className="flex gap-3.5 mb-6 !leading-[175.9%] text-xs tab:text-sm laptop:mb-[18px]"
								>
									<Figure
										image={terms_list}
										className="min-w-[17px] h-[17px] mt-1.5"
										altText="List marker"
									/>
									{item}
								</li>
							))}
						</ul>
						<div className="text-center">
							<Button
								path="/contact"
								className="inline-block py-2 px-3.5 tab:px-10 tab:py-4"
							>
								Read More
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="tab:w-1/2">
				<Picture
					image2x={policy_2x}
					image1x={policy_1x}
					imageText="Judging criteria"
				/>
			</div>
			<Gradient />
			<Stars />
		</section>
	);
};
