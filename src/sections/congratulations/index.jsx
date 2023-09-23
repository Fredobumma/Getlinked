import { congratulations_1x, congratulations_2x } from "src/assets";
import { Button, Heading, Picture, Text } from "src/components";
export const Congratulations = () => {
	return (
		<aside className="flex h-screen items-center my-10 laptop:my-40">
			<div className="border border-primary bg-white/[.01] max-w-[320px] mx-auto pb-[30px] pt-[18px] px-[30px] relative rounded-5px z-[100] tab:max-w-[540px] laptop:max-w-[700px] laptop:pb-[70px] laptop:pt-[34px] laptop:px-[60px]">
				<Picture
					image2x={congratulations_2x}
					image1x={congratulations_1x}
					imageText="Congrats celebration"
				/>
				<Heading
					type="h2"
					className="font-semibold mt-[26px] mb-[30px] text-base tab:text-2xl laptop:leading-normal laptop:mb-[15px] laptop:mt-0 laptop:text-32px"
				>
					Congratulations <br /> you have successfully Registered!
				</Heading>
				<Text className="font-medium text-center text-xs tab:text-sm laptop:font-semibold laptop:text-sm">
					Yes, it was easy and you did it! <br /> check your mail box for next
					step
					<span className="ml-[1px] text-sm tab:ml-1 tab:text-xl">
						&#129320;
					</span>
				</Text>
				<Button className="block mt-6 py-4 laptop:mt-[35px]">Back</Button>
			</div>
			<div className="fixed bg-background/[.93] h-screen inset-0 m-auto w-screen z-[90]"></div>
		</aside>
	);
};
