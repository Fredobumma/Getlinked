export const Input = ({ name, type, placeholder, className }) => {
	return (
		<input
			name={name}
			type={type}
			placeholder={placeholder}
			className={`bg-transparent border border-white leading-none placeholder:text-white px-6 py-3.5 rounded w-full laptop:px-[30px] ${className}`}
		/>
	);
};
