import { Heading, Picture, Text } from "src/components";
import {
	liberty_assured_2x,
	liberty_assured_1x,
	liberty_pay_2x,
	liberty_pay_1x,
	paybox_2x,
	paybox_1x,
	vizual_2x,
	vizual_1x,
	winwise_2x,
	winwise_1x,
	wisper_2x,
	wisper_1x,
} from "src/assets";

export const Sponsors = () => {
	const listItems = [
		{
			image2x: liberty_assured_2x,
			image1x: liberty_assured_1x,
			alt: "Liberty assured logo",
		},
		{
			image2x: liberty_pay_2x,
			image1x: liberty_pay_1x,
			alt: "Liberty pay logo",
		},
		{ image2x: winwise_2x, image1x: winwise_1x, alt: "Winwise logo" },
		{ image2x: wisper_2x, image1x: wisper_1x, alt: "Wisper logo" },
		{ image2x: paybox_2x, image1x: paybox_1x, alt: "paybox logo" },
		{ image2x: vizual_2x, image1x: vizual_1x, alt: "Vizual logo" },
	];

	return (
		<section className="pb-[104px] pt-10 laptop:pb-32 laptop:pt-28">
			<Heading
				type="h2"
				className="font-heading font-bold text-xl tab:text-2xl laptop:!text-[32px] laptop:leading-normal"
			>
				Partners and Sponsors
			</Heading>
			<Text className="!leading-[20.5px] max-w-[286px] mx-auto mt-[5px] mb-10 text-xs tab:max-w-[450px] tab:mt-[22px] tab:mb-16 tab:text-sm laptop:!text-base">
				Getlinked Hackathon 1.0 is honored to have the following major companies
				as its partners and sponsors
			</Text>
			<div className="border border-primary bg-white/[.01] grid grid-cols-3 max-w-[340px] mx-auto place-items-center py-10 rounded-5px tab:max-w-[540px] laptop:max-w-[1255px] laptop:py-36">
				{listItems.map(({ image2x, image1x, alt }, index) => (
					<div
						key={index}
						className="flex relative items-center justify-center h-full w-full"
					>
						<div className="w-full mb-2 mt-1.5 laptop:mb-[30px] laptop:mt-5">
							<Picture image2x={image2x} image1x={image1x} imageText={alt} />
						</div>
						{index < 3 && (
							<div className="absolute bg-primary bottom-0 h-0.5 inset-x-0 min-w-[1em] mx-auto w-[68px] laptop:h-1 laptop:w-[257.3px]"></div>
						)}
						{(index % 3 && (
							<div className="bg-primary h-[30px] max-h-fit min-h-[1em] mr-auto -order-1 w-0.5 laptop:w-1 laptop:h-28"></div>
						)) ||
							null}
					</div>
				))}
			</div>
		</section>
	);
};
