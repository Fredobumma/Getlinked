import { AnchorLink } from "..";

export const Logo = () => {
	return (
		<figure>
			<figcaption className="font-heading font-bold text-[15px] tab:text-[28px] laptop:text-4xl">
				<AnchorLink path="/">
					get<span className="text-primary inline">linked</span>
				</AnchorLink>
			</figcaption>
		</figure>
	);
};
