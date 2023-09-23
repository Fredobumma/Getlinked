import { AnchorLink, Text } from "src/components";
import { facebook, instagram, linkedIn, x_twitter } from "src/assets";

export const SocialAccounts = ({
	containerStyles,
	text,
	textStyles,
	iconStyles,
}) => {
	const socialAccounts = [
		{
			title: "Instagram logo",
			image: instagram,
			path: "https://www.instagram.com/",
		},
		{
			title: "X-twitter logo",
			image: x_twitter,
			path: "https://twitter.com/getLinkedai",
		},
		{
			title: "Facebook logo",
			image: facebook,
			path: "https://www.facebook.com/",
		},
		{
			title: "LinkedIn logo",
			image: linkedIn,
			path: "https://ng.linkedin.com/company/getlinked-ai?trk=public_post_main-feed-card_reshare_feed-actor-name",
		},
	];

	return (
		<div className={`flex ${containerStyles}`}>
			<Text className={`text-primary text-xs ${textStyles}`}>
				{text || "Share on"}
			</Text>
			<nav className={`flex items-center ${iconStyles}`}>
				{socialAccounts.map(({ title, image, path }, index) => (
					<AnchorLink key={index} path={path} target="_blank">
						<img src={image} alt={title} />
					</AnchorLink>
				))}
			</nav>
		</div>
	);
};
