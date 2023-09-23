import { Figure, Heading, Text } from "src/components";
import { timeline_1x, timeline_2x, top_timeline } from "src/assets";

export const Timeline = () => {
	const data = [
		{
			content:
				"The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
			date: "November 18, 2023",
			heading: "Hackathon Announcement",
			containerStyles: "flex-row",
			contentStyles: "items-end justify-end",
			dateStyles: "items-start justify-start",
			textStyles: "text-right",
		},
		{
			content:
				"Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
			date: "November 18, 2023",
			heading: "Teams Registration begins",
			containerStyles: "flex-row-reverse",
			contentStyles: "items-start justify-start",
			dateStyles: "items-end justify-end",
			textStyles: "text-left",
		},
		{
			content: "Interested Participants are no longer Allowed to register",
			date: "November 18, 2023",
			heading: "Teams Registration ends",
			containerStyles: "flex-row",
			contentStyles: "items-end justify-end",
			dateStyles: "items-start justify-start",
			textStyles: "text-right",
		},
		{
			content:
				"All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
			date: "November 18, 2023",
			heading: "Announcement of the accepted teams and ideas",
			containerStyles: "flex-row-reverse",
			contentStyles: "items-start justify-start",
			dateStyles: "justify-end",
			textStyles: "text-left",
		},
		{
			content:
				"Accepted teams can now proceed to build their ground breaking skill driven solutions",
			date: "November 18, 2023",
			heading: "Getlinked Hackathon 1.0 Offically Begins",
			containerStyles: "flex-row",
			contentStyles: "items-end justify-end",
			dateStyles: "items-start justify-start",
			textStyles: "text-right",
		},
		{
			content:
				"Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
			date: "November 18, 2023",
			heading: "Demo Day",
			containerStyles: "flex-row-reverse",
			contentStyles: "items-start justify-start",
			dateStyles: "justify-end",
			textStyles: "text-left",
		},
	];

	return (
		<section>
			<Heading
				type="h2"
				className="font-heading font-bold text-xl tab:text-2xl laptop:text-[32px]"
			>
				Timeline
			</Heading>
			<Text className="!leading-[172.4%] max-w-[292px] mb-14 mt-5 mx-auto text-sm tab:max-w-[340px] tab:text-sm laptop:mb-[90px] laptop:mt-3 laptop:!text-sm">
				Here is the breakdown of the time we anticipate using for the upcoming
				event.
			</Text>
			{data.map(
				(
					{
						content,
						date,
						heading,
						containerStyles,
						contentStyles,
						dateStyles,
						textStyles,
					},
					index,
				) => (
					<div
						key={index}
						className={`hidden gap-20 items-end justify-center max-w-none mb-5 mx-auto w-full tab:flex ${containerStyles}`}
					>
						<div className={`flex flex-col gap-2 w-full ${contentStyles}`}>
							<Heading
								type="h2"
								className={`font-bold text-lg text-primary laptop:text-2xl laptop:max-w-[520px] ${textStyles}`}
							>
								{heading}
							</Heading>
							<Text
								className={`tab:text-sm laptop:!text-sm laptop:max-w-[450px] ${textStyles}`}
							>
								{content}
							</Text>
						</div>
						<div className="flex flex-col gap-5 items-center">
							<Figure
								image={!index ? top_timeline : timeline_2x}
								altText="Line icon"
								className="h-max"
							/>
							<span className="bg-timeLine flex font-bold h-14 items-center justify-center rounded-full text-lg w-14 tab:text-2xl">
								{index + 1}
							</span>
						</div>
						<Text
							className={`flex font-bold text-primary tab:text-lg w-full laptop:!text-2xl ${textStyles} ${dateStyles}`}
						>
							{date}
						</Text>
					</div>
				),
			)}
			{/* MOBILE SCREEN VIEW */}
			{data.map(({ heading, date, content }, index) => (
				<div
					key={index}
					className="flex gap-4 max-w-[480px] mt-[30px] mx-auto w-full tab:hidden"
				>
					<div className="flex flex-col items-center justify-center gap-1">
						<Figure image={timeline_1x} altText="Line icon" className="h-max" />
						<span className="bg-timeLine font-bold h-5 rounded-full text-sm w-5">
							{index + 1}
						</span>
					</div>
					<div className="flex flex-col items-stretch text-left">
						<Heading type="h2" className="font-bold text-primary text-sm">
							{heading}
						</Heading>
						<Text className="text-sm">{content}</Text>
						<Text className="font-bold mt-auto text-primary text-sm">
							{date}
						</Text>
					</div>
				</div>
			))}
		</section>
	);
};
