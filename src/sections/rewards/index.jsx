import { Heading, Picture, Text, Figure } from "src/components";
import {
	reward_2x,
	reward_1x,
	silver_medal_2x,
	gold_medal_2x,
	bronze_medal_2x,
} from "src/assets";

export const Rewards = () => {
	const cards = [
		{
			position: {
				title: "2nd",
			},
			price: "N300,000",
			image: {
				source: silver_medal_2x,
				styles: "-mt-32 mx-auto max-w-[80%] tab:-mt-36",
				alt: "A silver medal",
			},
		},
		{
			backgroundStyles: "border-secondary bg-secondary/[.12]",
			position: {
				title: "1st",
			},
			price: "N400,000",
			image: {
				source: gold_medal_2x,
				styles: "-mt-36 -mx-card tab:-mt-44 tab:-mx-3 laptop:-mt-56",
				alt: "A gold medal",
			},
		},
		{
			position: {
				title: "3rd",
				styles: "mt-3.5 tab:mt-5",
			},
			price: "N150,000",
			image: {
				source: bronze_medal_2x,
				styles: "-mt-[124px] mx-auto max-w-[80%] tab:-mt-[140px]",
				alt: "A bronze medal",
			},
		},
	];

	return (
		<section className="flex flex-col items-center justify-center tab:flex-row tab:gap-[50px] laptop:gap-10">
			<div className="hidden tab:block laptop:w-2/5">
				<Picture
					image2x={reward_2x}
					image1x={reward_1x}
					imageText="Prizes and rewards"
				/>
			</div>
			<div className="max-w-[320px] tab:mb-0 tab:text-left tab:max-w-[420px] laptop:max-w-[1024px]">
				<div className="mx-auto max-w-[560px] laptop:pb-20">
					<Heading
						type="h2"
						className="font-heading font-bold text-xl mb-1.5 tab:text-2xl tab:mb-3.5 laptop:mb-4 laptop:text-[32px] laptop:leading-normal"
					>
						Prizes and
						<p className="text-primary">Rewards</p>
					</Heading>
					<Text className="!leading-[170.9%] mb-10 text-xs tab:mb-0 tab:text-sm laptop:!text-base">
						Prizes and Rewards Highlight of the prizes or rewards for winners
						and for participants.
					</Text>
				</div>
				<div className="tab:hidden">
					<Picture
						image2x={reward_2x}
						image1x={reward_1x}
						imageText="Prizes and rewards"
					/>
				</div>
				<div className="gap-min10px grid grid-cols-3 items-center mt-20 pt-[50px] text-xs text-center tab:gap-4 tab:pt-20">
					{cards.map(({ backgroundStyles, image, position, price }, index) => (
						<div
							key={index}
							className={`border px-card pt-20 pb-5 font-bold h-fit rounded-lg border-primary bg-primary/[.12] w-full laptop:pb-10 laptop:px-1.5 ${backgroundStyles}`}
						>
							<div className={image.styles}>
								<Picture image2x={image.source} imageText={image.alt} />
							</div>
							<p className={`mt-4 tab:mt-6 laptop:text-4xl ${position.styles}`}>
								{position.title}
							</p>
							<p className={`mt-1 mb-1.5 laptop:mb-5 laptop:text-2xl`}>
								Runner
							</p>
							<p
								className={`text-sm laptop:text-[32px] ${
									index === 1 ? "text-primary" : "text-secondary"
								}`}
							>
								{price}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
