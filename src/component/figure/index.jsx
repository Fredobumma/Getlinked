export const Figure = ({ image, className }) => {
	return (
		<figure className={className}>
			<img src={image} className="max-w-full h-auto" />
		</figure>
	);
};
