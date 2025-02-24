import './OurStorySection.css'

import CardComponent from "../../../components/CardComponent/CardComponent";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import IconWhoWeAre from '../../../assets/imgs+icons/IconWhoWeAre.svg'
import IconStarryNight from '../../../assets/imgs+icons/IconStarryNight.svg'

export default function OurStorySection() {
    return (
        <section className="OurStorySection">
            <SectionTitle title="Our story" />
            <div className="cards">
                <div>
                    <div className="icon">
                        <img src={IconWhoWeAre} alt="" />
                    </div>
                    <CardComponent>
                        <div className="head">
                            <div className="text">
                                <p>Who are we?</p>
                            </div>
                        </div>
                        <div className="body">
                            <div className="text">
                                <p>Hi! We are Tom & Kay — two passionate engineers of user experience. Building things people want makes us happy!</p>
                                <br />
                                <p>Kay is a former Googler and Tom is a startup veteran. We started VanGoux because it didn’t make sense to us that UI designs needed to be recreated in code from scratch. </p>
                            </div>
                        </div>
                    </CardComponent>
                </div>
                
                <div>
                    <div className="icon">
                        <img src={IconStarryNight} alt="" />
                    </div>
                    <CardComponent>
                        <div className="head">
                            <div className="text">
                                <p>What’s up with the name?</p>
                            </div>
                        </div>
                        <div className="body">
                            <div className="text">
                                <p>VanGoux is pronounced Van Gogh —
                                    as in Vincent Van Gogh meets UX.
                                </p>
                                <br />
                                <p>Vincent  transformed anguish to ecstatic beauty through his art. This name is our way of honoring his profound work.</p>
                                <br />
                                <p>Check out Dr. Who doing something similar.</p>
                            </div>
                        </div>
                    </CardComponent>
                </div>
            </div>
        </section>
    )
}
