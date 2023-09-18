export const Figure = ({ image, className }) => {
	return (
		<figure className={className}>
			<img src={image} className="max-w-full h-auto" />
		</figure>
	);
};

// const Instances = () => {
// 	return (
// 		<>
// 			<Heading
// 				type="h1"
// 				className="font-heading font-bold text-[32px] max-w-[300px] mx-auto tab:text-[56px] tab:max-w-[600px] laptop:text-[80px] laptop:max-w-[800px]"
// 			>
// 				getlinked Tech Hackathon{" "}
// 				<p className="text-primary items-center inline-flex flex-nowrap">
// 					1.0
// 					<Figure
// 						image={chain}
// 						className="w-8 h-auto tab:w-[56px] laptop:w-20"
// 					/>
// 					<Figure
// 						image={spark}
// 						className="w-8 h-auto tab:w-[56px] laptop:w-20"
// 					/>
// 				</p>
// 			</Heading>
// 			<Heading
// 				type="h2"
// 				className="font-heading font-bold text-xl tab:text-2xl laptop:text-[32px]"
// 			>
// 				Introduction to getlinked{" "}
// 				<p className="text-primary inline">tech Hackathon 1.0</p>
// 			</Heading>
// 		</>
// 	);
// };
