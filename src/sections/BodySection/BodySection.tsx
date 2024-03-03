import './BodySection.css'

import FeaturesSection from "./FeaturesSection/FeaturesSection";
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection";
import OurStorySection from "./OurStorySection/OurStorySection";
import ScheduleCallSection from './ScheduleCall/ScheduleCallSection';
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import WhatSection from "./WhatSection/WhatSection";
import WhoSection from './WhoSection/WhoSection';

export default function BodySection() {
    return (
        <div className="BodySection">
            <TestimonialsSection />
            <HowItWorksSection />
            <FeaturesSection />
            <WhoSection />
            <WhatSection />
            <ScheduleCallSection />
            <OurStorySection />
        </div>
    )
}
