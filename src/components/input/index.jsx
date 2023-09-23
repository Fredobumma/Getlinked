import { Text } from "src/components";

export const Input = ({
	label,
	labelStyles,
	id,
	className,
	checkLabel,
	checkLabelStyles,
	errors,
	register,
	...rest
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
				className={`bg-transparent border border-white leading-none placeholder:text-white px-6 py-3.5 rounded w-full laptop:px-[30px] ${className}`}
				{...rest}
				{...register(id)}
			/>
			{checkLabel && (
				<label className={checkLabelStyles} htmlFor={id}>
					{checkLabel}
				</label>
			)}
			<Text className="text-[#bf4349] text-[10px] tab:text-xs">
				{errors[id]?.message}
			</Text>
		</>
	);
};
