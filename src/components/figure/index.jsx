export const Figure = ({ className, image }) => {
	return (
		<figure className={className}>
			<img src={image} className="h-auto max-w-full mx-auto w-full" />
		</figure>
	);
};
