import { Heading, Picture, Text } from "src/components";
import { faq_2x, faq_1x } from "src/assets";

export const Faq = () => {
	const questions = [
		"Can I work on a project I started before the hackathon?",
		"What happens if I need help during the hackathon?",
		"What happens if I don't have an idea for a project?",
		"Can I join a team or do I have to come with one?",
		"What happens after the hackathon ends",
		"Can I work on a project I started before the hackathon?",
	];

	return (
		<section className="border-y border-white/[0.18] flex flex-col items-center justify-center -mx-4 pb-[50px] pt-[60px] px-4 tab:flex-row tab:gap-[50px] tab:-mx-8 tab:px-8 laptop:-mx-12 laptop:pb-[60px] laptop:pt-[74px] laptop:px-12">
			<div className="max-w-[320px] mb-[66px] tab:mb-0 tab:text-left tab:max-w-[420px] tab:w-1/2 laptop:max-w-[540px]">
				<Heading
					type="h2"
					className="font-heading font-bold text-xl mb-1.5 tab:text-2xl tab:mb-3.5 laptop:mb-4 laptop:!text-[32px] laptop:leading-normal"
				>
					Frequently Ask
					<p className="text-primary">Question</p>
				</Heading>
				<Text className="!leading-[27.5px] mb-[45px] mx-auto text-xs tab:text-sm laptop:mb-[68px] laptop:!text-sm">
					We got answers to the questions that you might want to ask about
					getlinked Hackathon 1.0
				</Text>
				<div className="text-left">
					{questions.map((question, index) => (
						<div
							key={index}
							className="flex justify-between border-b border-b-primary gap-5 mb-3.5 pb-2.5 laptop:mb-[25px]"
						>
							<Text className="max-w-[230px] mb-1 text-xs tab:max-w-[250px] tab:text-sm laptop:max-w-none laptop:!text-sm">
								{question}
							</Text>
							<Text className="text-primary self-end !text-xl">+</Text>
							{/* No answer provided as collapsible details. This should be implemented using a boolean state variable. */}
						</div>
					))}
				</div>
			</div>
			<div className="animate-pulse">
				<Picture image2x={faq_2x} image1x={faq_1x} imageText="Rules and faqs" />
			</div>
		</section>
	);
};
