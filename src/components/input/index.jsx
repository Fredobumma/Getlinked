export const Input = ({
	label,
	labelStyles,
	id,
	name,
	type,
	placeholder,
	className,
	checkLabel,
	checkLabelStyles,
}) => {
	return (
		<>
			{label && (
				<label htmlFor={id} className={labelStyles}>
					{label}
				</label>
			)}
			<input
				id={id}
				name={name}
				type={type}
				placeholder={placeholder}
				className={`bg-transparent border border-white leading-none placeholder:text-white px-6 py-3.5 rounded w-full laptop:px-[30px] ${className}`}
			/>
			{checkLabel && (
				<label className={checkLabelStyles} htmlFor={id}>
					{checkLabel}
				</label>
			)}
		</>
	);
};
