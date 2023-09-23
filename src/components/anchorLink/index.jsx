import { Link } from "react-router-dom";

export const AnchorLink = ({ children, styles, path, target, onClick }) => {
	return (
		<Link className={styles} to={path} onClick={onClick} target={target}>
			{children}
		</Link>
	);
};
