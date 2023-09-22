import {
	chain,
	creative,
	hackathon_guy_1x,
	hackathon_guy_2x,
	innovation,
	spark,
} from "src/assets";
import { Button, Figure, Heading, Picture, Text } from "src/components";

export const Hero = () => {
	return (
		<header>
			<Text className="font-bold italic max-w-fit mb-10 mx-auto text-base tab:max-w-none tab:mb-20 tab:text-right laptop:!text-4xl">
				Igniting a Revolution in{" "}
				<p className="inline-flex flex-col">
					{" "}
					HR Innovation{" "}
					<Figure
						image={innovation}
						altText="Underline vector"
						className="mt-2.5 w-[115px] tab:mt-1 laptop:mt-0.5 laptop:w-[254px]"
					/>
				</p>
			</Text>
			<section className="flex flex-col items-center justify-center tab:flex-row">
				<div className="tab:text-left">
					<Heading
						type="h1"
						className="font-heading font-bold text-[32px] max-w-[300px] mx-auto tab:text-[56px] tab:max-w-[600px] laptop:leading-[100px] laptop:text-[80px] laptop:max-w-[800px] laptop:-mr-20"
					>
						getlinked{" "}
						<p className="inline-flex relative">
							Tech
							<Figure
								image={creative}
								altText="A creative vector"
								className="sticky w-[18px] -ml-[30px] -mt-3 tab:-ml-[60px] tab:-mt-12 tab:w-[54px] laptop:-ml-20"
							/>{" "}
						</p>
						Hackathon{" "}
						<span className="text-primary items-center inline-flex flex-nowrap">
							1.0
							<Figure
								image={chain}
								altText="A chain vector"
								className="w-8 h-auto tab:w-[56px] laptop:w-20"
							/>
							<Figure
								image={spark}
								altText="A lighting vector"
								className="w-8 h-auto tab:w-[56px] laptop:w-20"
							/>
						</span>
					</Heading>
					<Text className="max-w-[264px] mt-2.5 mb-6 mx-auto tab:max-w-[360px] tab:mx-0 laptop:max-w-[520px]">
						Participate in getlinked tech Hackathon 2023 stand a chance to win a
						Big prize
					</Text>
					<Button className="inline-block px-[46px] py-3.5 laptop:px-[52px] laptop:py-4">
						Register
					</Button>
					<Text className="font-countDown leading-[133%] max-w-fit mb-3 mt-3.5 mx-auto text-5xl tab:leading-[133%] tab:mb-0 tab:mt-10 tab:mx-0 tab:!text-[64px] laptop:leading-[133%] laptop:mt-20">
						<span>
							<span>00</span>
							<span className="text-sm">H</span>
						</span>
						<span>
							<span>00</span>
							<span className="text-sm">M</span>
						</span>
						<span>
							<span>00</span>
							<span className="text-sm">S</span>
						</span>
					</Text>
				</div>
				<div className="relative -mx-4 tab:-mx-8 laptop:-mx-12">
					<Picture
						image2x={hackathon_guy_2x}
						image1x={hackathon_guy_1x}
						imageText="A hackathon tech guy"
					/>
				</div>
			</section>
		</header>
	);
};
