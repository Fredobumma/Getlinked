import { createElement } from "react";

export const Heading = ({ type, className, children }) => {
	return createElement(type, { className }, children);
};
