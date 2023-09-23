import { Button, Heading, Picture, Text } from "src/components";
import { criteria_2x, criteria_1x } from "src/assets";

export const Criteria = () => {
	const paragraphs = [
		{
			title: "Innovation and Creativity: ",
			text: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
		},
		{
			title: "Functionality: ",
			text: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
		},
		{
			title: "Impact and Relevance: ",
			text: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
		},
		{
			title: "Technical Complexity: ",
			text: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
		},
		{
			title: "Adherence to Hackathon Rules: ",
			text: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
		},
	];

	return (
		<section className="flex flex-col items-center justify-center pt-[74px] pb-[60px] tab:flex-row tab:gap-[50px] laptop:pb-40 laptop:pt-[92px]">
			<div className="tab:w-1/2">
				<Picture
					image2x={criteria_2x}
					image1x={criteria_1x}
					imageText="Judging criteria"
				/>
			</div>
			<div className="max-w-[320px] tab:text-left tab:max-w-[420px] tab:w-1/2 laptop:max-w-[540px]">
				<Heading
					type="h2"
					className="font-heading font-bold text-xl mb-4 tab:text-2xl tab:mb-3.5 laptop:text-[32px] laptop:leading-normal laptop:mb-5"
				>
					Judging Criteria
					<p className="text-primary">Key attributes</p>
				</Heading>
				{paragraphs.map(({ title, text }, index) => (
					<Text
						key={index}
						className="mb-5 mx-auto !leading-[173.5%] !text-xs tab:mb-6 tab:!text-sm tab:!leading-[173.5%] laptop:mb-[28px]"
					>
						<span className="font-bold text-abstract text-[13px] tab:text-base">
							{title}
						</span>
						{text}
					</Text>
				))}
				<Button className="inline-block py-2 px-3.5 tab:mt-5 tab:px-10 tab:py-4 laptop:mt-[30px]">
					Read More
				</Button>
			</div>
		</section>
	);
};
