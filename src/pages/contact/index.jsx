import {
	Button,
	Figure,
	Heading,
	Input,
	SocialAccounts,
	Text,
} from "src/components";
import { back_btn } from "src/assets";

export const Contact = () => {
	const inputs = [
		{ name: "firstName", type: "text", placeholder: "First Name" },
		{ name: "email", type: "email", placeholder: "Mail" },
	];

	const contactTextbox = [
		{ content: "Contact Information", styles: "max-w-[120px] my-[17px]" },
		{
			content: "27,Alara Street Yaba 100012 Lagos State",
			styles: "max-w-[120px]",
		},
		{ content: "Call Us : 07067981819", styles: "mt-[21px] mb-[22px]" },
		{ content: "we are open from Monday-Friday 08:00am - 05:00pm" },
	];

	return (
		<section className="laptop:flex laptop:justify-center">
			<div className="hidden max-w-[272px] mx-auto text-left laptop:block laptop:mt-14">
				<Heading
					type="h1"
					className="font-heading font-bold text-primary text-xl tab:text-2xl laptop:!text-[32px] laptop:leading-normal"
				>
					Get in touch
				</Heading>
				{contactTextbox.map(({ content, styles }, index) => (
					<Text key={index} className={`laptop:!text-base ${styles || ""}`}>
						{content}
					</Text>
				))}
				<SocialAccounts
					containerStyles="flex-col gap-3.5 mt-[35px] text-left"
					textStyles="laptop:!text-base"
					iconStyles="gap-4"
				/>
			</div>
			<div className="max-w-[300px] mx-auto rounded-xl text-left w-full tab:max-w-[500px] laptop:shadow-form laptop:bg-white/[.03] laptop:max-w-[620px] laptop:px-24 laptop:py-[70px]">
				<Figure
					image={back_btn}
					className="mb-10 w-6 laptop:hidden"
					altText="Back button"
				/>
				<Text className="font-semibold max-w-[200px] text-xl text-primary tab:max-w-[320px] tab:text-xl laptop:mb-[34px]">
					Questions or need assistance? Let us know about it
				</Text>
				<Text className="max-w-[240px] mt-6 mb-[30px] text-xs tab:max-w-none tab:text-xs laptop:hidden">
					Email us below to any question related to our event
				</Text>
				<form className="space-y-[25px] laptop:space-y-10">
					{inputs.map(({ name, type, placeholder }, index) => (
						<Input
							key={index}
							name={name}
							type={type}
							placeholder={placeholder}
							className="block"
						/>
					))}
					<textarea
						name="message"
						placeholder="Message"
						rows="6"
						className="bg-transparent block border border-white leading-none placeholder:text-white px-6 py-[30px] rounded w-full laptop:px-[30px]"
					></textarea>
					<div className="!mt-[30px] text-center">
						<Button className="inline-block px-14 py-[17px]">Submit</Button>
					</div>
				</form>
				<SocialAccounts
					containerStyles="flex-col gap-[5px] mt-10 text-center laptop:hidden"
					textStyles="tab:text-sm"
					iconStyles="justify-center gap-3.5"
				/>
			</div>
		</section>
	);
};
