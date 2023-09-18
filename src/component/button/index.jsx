export const Button = ({ className, children }) => {
	return (
		<a href="/" className={`bg-button rounded ${className}`}>
			{children}
		</a>
	);
};
