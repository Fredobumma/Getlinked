export const Figure = ({ className, image, altText }) => {
	return (
		<figure className={className}>
			<img
				src={image}
				className="h-auto max-w-full mx-auto w-full"
				alt={altText}
			/>
		</figure>
	);
};
