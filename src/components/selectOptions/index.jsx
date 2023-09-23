export const SelectOptions = ({
	label,
	id,
	name,
	labelStyles,
	options,
	errors,
	register,
}) => {
	return (
		<>
			{label && (
				<label htmlFor={name} className={labelStyles}>
					{label}
				</label>
			)}
			<div className="border border-white pr-2.5 rounded w-full">
				<select
					name={name}
					id={id}
					className="bg-transparent pl-2.5 py-3.5 text-xs w-full active:border-0 hover:border-0"
					{...register(id)}
				>
					{options.map((option, index) => (
						<option
							className="text-background text-xs"
							key={index}
							value={index === 0 ? "" : option}
						>
							{option}
						</option>
					))}
				</select>
			</div>
		</>
	);
};
