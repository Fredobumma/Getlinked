import {
	Figure,
	Gradient,
	Heading,
	Input,
	Picture,
	SelectOptions,
	Stars,
	Text,
} from "src/components";
import { movement, register_1x, register_2x } from "src/assets";

export const RegisterForm = ({ register, handleSubmit, errors }) => {
	const inputs = [
		{
			type: "text",
			label: "Team’s Name",
			id: "team_name",
			placeholder: "Enter the name of your group",
		},
		{
			type: "number",
			label: "Phone",
			id: "phone_number",
			placeholder: "Enter your phone number",
		},
		{
			type: "email",
			label: "Email",
			id: "email",
			placeholder: "Enter your email address",
		},
		{
			type: "text",
			label: "Project Topic",
			id: "project_topic",
			placeholder: "What is your group project topic",
		},
	];

	const selectOptions = [
		{
			id: "category",
			label: "Category",
			containerStyles: "w-[70%] tab:w-3/5 laptop:w-full",
			options: ["Select your category", "1", "2"],
		},
		{
			id: "group_size",
			label: "Group Size",
			containerStyles: "tab:w-2/5 laptop:w-full",
			options: ["Select", "1", "10", "50"],
		},
	];

	return (
		<section className="relative pb-[30px] text-left laptop:flex laptop:items-center laptop:justify-center laptop:py-[60px]">
			<Text className="font-bold max-w-[264px] mb-[30px] mx-auto text-primary text-[15px] tab:max-w-[500px] tab:text-base laptop:hidden">
				Register
			</Text>
			<Picture
				image2x={register_2x}
				image1x={register_1x}
				imageText="3d-graphic designer showing thumbs up"
			/>
			<div className="max-w-[264px] mx-auto rounded-xl tab:max-w-[500px] laptop:bg-white/[.03] laptop:max-w-[740px] laptop:px-[90px] laptop:py-[65px] laptop:shadow-form">
				<Heading
					type="h1"
					className="hidden font-heading font-bold text-primary laptop:block laptop:leading-normal laptop:text-[32px]"
				>
					Register
				</Heading>
				<div className="flex gap-1.5 items-end mt-2 tab:mt-10 laptop:mt-[30px]">
					<Text className="!leading-none text-xs tab:text-xs laptop:text-sm">
						Be part of this movement!
					</Text>
					<div className="border-b border-dashed border-primary w-[84px] tab:w-[90px] laptop:w-[100px]">
						<Figure
							image={movement}
							className="w-1/2 mx-auto"
							altText="People walking by"
						/>
					</div>
				</div>
				<Text className="capitalize text-xl mt-2 mb-6 tab:text-xl laptop:mb-[30px] laptop:mt-5 laptop:text-2xl">
					CREATE YOUR ACCOUNT
				</Text>
				<form onSubmit={handleSubmit}>
					<div className="laptop:grid laptop:grid-cols-2 laptop:gap-x-8">
						{inputs.map(({ type, label, id, placeholder }, index) => (
							<div key={index} className="mb-[18px] laptop:mb-[30px]">
								<Input
									type={type}
									label={label}
									id={id}
									name={id}
									register={register}
									errors={errors}
									placeholder={placeholder}
									labelStyles="mb-[5px] text-[13px] laptop:text-sm laptop:mb-2.5"
									className="px-[30px] py-3 placeholder:text-[13px] placeholder:opacity-25"
								/>
							</div>
						))}
					</div>

					<div className="flex gap-5 w-full laptop:gap-8">
						{selectOptions.map(
							({ id, label, containerStyles, options }, index) => (
								<div key={index} className={`${containerStyles}`}>
									<SelectOptions
										id={id}
										label={label}
										register={register}
										errors={errors}
										name={id}
										labelStyles="mb-[5px] text-[13px] laptop:text-sm laptop:mb-2.5"
										options={options}
									/>
									<Text className="text-[#bf4349] text-[10px] tab:text-xs">
										{errors[id]?.message}
									</Text>
								</div>
							),
						)}
					</div>
					<div className="text-center mt-[15px] mb-6 laptop:mt-6 laptop:mb-0">
						<Text className="italic text-left text-abstract text-[9px] tab:!text-xs laptop:text-xs">
							Please review your registration details before submitting
						</Text>
						<div className="flex items-start justify-start gap-2.5 mt-3 mb-3.5 text-left tab:items-center tab:mb-[18px] laptop:mb-[22px] laptop:mt-4">
							<Input
								type="checkbox"
								id="checkbox"
								name="checkbox"
								register={register}
								errors={errors}
								className="accent-white mt-1 max-w-fit"
								checkLabel="I agreed with the event terms and conditions and privacy policy"
								checkLabelStyles="mt-0.5 text-[10px] tab:text-xs tab:mt-1"
							/>
							<Text className="text-[#bf4349] text-[10px] tab:text-xs">
								{errors.privacy_poclicy_accepted?.message}
							</Text>
						</div>
						<button className="bg-button rounded inline-block px-14 py-[17px] laptop:block">
							Submit
						</button>
					</div>
				</form>
			</div>
			<Gradient />
			<Stars />
		</section>
	);
};
