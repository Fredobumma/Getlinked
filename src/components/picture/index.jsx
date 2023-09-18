export const Picture = ({ image1x, image2x, imageText }) => {
	return (
		<picture>
			<source media="(min-width:1024px)" srcSet={image2x} />
			<source media="" srcSet={image1x} />
			<img
				src={image2x}
				alt={imageText}
				className="max-w-full h-auto mx-auto"
			/>
		</picture>
	);
};
