import { AnchorLink } from "src/components";

export const Button = ({ className, children, path }) => {
	return (
		<AnchorLink path={path} styles={`bg-button rounded ${className}`}>
			{children}
		</AnchorLink>
	);
};
