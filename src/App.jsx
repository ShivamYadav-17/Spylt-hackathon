import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger, gsap } from "gsap/all";
import MessageSection from "./sections/MessageSection";
import FlavourSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import NavBar from "./components/NavBar";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
	useGSAP(() => {
		ScrollSmoother.create({
			smooth: 3,
			effects: true,
		});
	});
	return (
		<main>
			<NavBar/>
			<div id='smooth-wrapper'>
				<div id='smooth-content'>
					<HeroSection />
					<MessageSection />
					<FlavourSection />
					<NutritionSection />

					<div>
						<BenefitSection />
						<TestimonialSection />
					</div>
					<FooterSection />
				</div>
			</div>
		</main>
	);
};

export default App;
