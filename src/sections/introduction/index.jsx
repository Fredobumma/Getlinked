import { Heading, Text, Picture, Figure } from "src/components";
import { arrow, big_idea_2x, big_idea_1x } from "src/assets";

export const Introduction = () => {
	return (
		<section className="flex flex-col items-center justify-center tab:flex-row tab:gap-10 laptop:gap-20">
			<div className="tab:relative tab:min-w-1/2">
				<Picture
					image2x={big_idea_2x}
					image1x={big_idea_1x}
					imageText="The big idea"
				/>
				<Figure
					image={arrow}
					className="w-[22.5px] h-auto mt-2.5 mb-[22.5px] mx-auto -bottom-[15%] -right-[5%] tab:w-9 tab:absolute tab:mx-0 laptop:w-[50px] laptop:-bottom-[10%] laptop:-right-[5%]"
				/>
			</div>
			<div className="max-w-[320px] tab:max-w-[420px] tab:text-left tab:w-1/2 laptop:max-w-[540px]">
				<Heading
					type="h2"
					className="font-heading font-bold text-xl mb-2.5 tab:text-2xl tab:mb-3.5 laptop:mb-4 laptop:text-[32px] laptop:leading-normal"
				>
					Introduction to getlinked
					<p className="text-primary">tech Hackathon 1.0</p>
				</Heading>
				<Text className="mx-auto leading-[27.5px]">
					Our tech hackathon is a melting pot of visionaries, and its purpose is
					as clear as day: to shape the future. Whether you're a coding genius,
					a design maverick, or a concept wizard, you'll have the chance to
					transform your ideas into reality. Solving real-world problems,
					pushing the boundaries of technology, and creating solutions that can
					change the world, that's what we're all about!
				</Text>
			</div>
		</section>
	);
};
