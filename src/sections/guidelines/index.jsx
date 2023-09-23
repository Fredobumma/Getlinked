import { Gradient, Heading, Picture, Stars, Text } from "src/components";
import { guideline_2x, guideline_1x } from "src/assets";

export const GuideLines = () => {
	return (
		<section className="relative border-y border-white/[0.18] flex flex-col items-center justify-center -mx-4 pb-12 px-4 tab:flex-row tab:gap-[50px] tab:-mx-8 tab:px-8 laptop:-mx-12 laptop:px-12 laptop:pb-0">
			<div className="tab:order-2">
				<Picture
					image2x={guideline_2x}
					image1x={guideline_1x}
					imageText="Rules and guidelines"
				/>
			</div>
			<div className="max-w-[320px] mt-2.5 tab:mt-0 tab:text-left tab:max-w-[420px] tab:w-1/2 laptop:max-w-[540px]">
				<Heading
					type="h2"
					className="font-heading font-bold text-xl mb-2.5 tab:text-2xl tab:mb-3.5 laptop:mb-4 laptop:text-[32px] laptop:leading-normal"
				>
					Rules and
					<p className="text-primary">Guidelines</p>
				</Heading>
				<Text
					data-aos="fade-right"
					className="mx-auto !leading-[27.5px] tab:text-sm"
				>
					Our tech hackathon is a melting pot of visionaries, and its purpose is
					as clear as day: to shape the future. Whether you're a coding genius,
					a design maverick, or a concept wizard, you'll have the chance to
					transform your ideas into reality. Solving real-world problems,
					pushing the boundaries of technology, and creating solutions that can
					change the world, that's what we're all about!
				</Text>
			</div>
			<Gradient />
			<Stars />
		</section>
	);
};
