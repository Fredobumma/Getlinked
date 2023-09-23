import { star, star_gray, star_purple } from "src/assets";
import { Figure } from "src/components";

export const Stars = () => {
	return (
		<>
			<Figure
				image={star}
				altText="A star"
				className="absolute bg-blend-lighten bg-gradient h-[32px] w-[26px] bottom-0 right-1/4 -z-20"
			></Figure>
			<Figure
				image={star_gray}
				altText="A star"
				className="absolute bg-blend-lighten bg-gradient h-[32px] w-[26px] top-1/2 left-full -z-20"
			></Figure>
			<Figure
				image={star_purple}
				altText="A star"
				className="absolute bg-blend-lighten bg-gradient h-[32px] w-[26px] right-[75%] bottom-[50%] -z-20"
			></Figure>
		</>
	);
};
