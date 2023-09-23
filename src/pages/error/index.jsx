import { Heading } from "src/components";

export const Error = () => {
	return (
		<Heading
			type="h2"
			className="font-heading pt-20 font-bold text-xl tab:text-2xl laptop:text-[32px] laptop:leading-normal"
		>
			Error occured.
			<p className="text-primary">Visit:</p>
			www.getLinked.ai
		</Heading>
	);
};
