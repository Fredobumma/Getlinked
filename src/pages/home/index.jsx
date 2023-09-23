import {
	Criteria,
	Faq,
	Footer,
	GuideLines,
	Hero,
	Introduction,
	Policy,
	Rewards,
	Sponsors,
	Timeline,
} from "src/sections";

export const Home = () => {
	return (
		<>
			<Hero />
			<Introduction />
			<GuideLines />
			<Criteria />
			<Faq />
			<Timeline />
			<Rewards />
			<Sponsors />
			<Policy />
			<Footer />
		</>
	);
};
