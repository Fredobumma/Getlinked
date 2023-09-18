export const Text = ({ children, className }) => {
	return (
		<p className={`text-[13px] tab:text-base laptop:text-xl ${className}`}>
			{children}
		</p>
	);
};
