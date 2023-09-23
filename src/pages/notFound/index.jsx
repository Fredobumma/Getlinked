import { Heading } from "src/components";

export const NotFound = () => {
	return (
		<Heading
			type="h2"
			className="font-heading pt-20 font-bold text-xl tab:text-2xl laptop:text-[32px] laptop:leading-normal"
		>
			This page is
			<p className="text-primary">Not found</p>
		</Heading>
	);
};
