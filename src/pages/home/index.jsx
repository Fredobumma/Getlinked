import {
	Criteria,
	Faq,
	Footer,
	GuideLines,
	Hero,
	Introduction,
	NavBar,
	Policy,
	Rewards,
	Sponsors,
	Timeline,
} from "src/sections";

export const Home = () => {
	return (
		<>
			<NavBar />
			<main className="mt-[120px] laptop:mt-44">
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
			</main>
		</>
	);
};
