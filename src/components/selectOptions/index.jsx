export const SelectOptions = ({ label, id, name, labelStyles, options }) => {
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
					className="bg-transparent pl-2.5 py-3.5 text-xs w-full"
				>
					{options.map((option, index) => (
						<option
							className="text-background text-xs"
							key={index}
							value={option}
						>
							{option}
						</option>
					))}
				</select>
			</div>
		</>
	);
};
