import './BodySection.css'

import FeaturesSection from "./FeaturesSection";
import HowItWorksSection from "./HowItWorksSection";
import OurStorySection from "./OurStorySection";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import WhatSection from "./WhatSection";

export default function BodySection() {
    return (
        <div className="BodySection">
            <TestimonialsSection />
            <HowItWorksSection />
            <FeaturesSection />
            <WhatSection />
            <OurStorySection />
        </div>
    )
}
