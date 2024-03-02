import './TestimonialsSection.css'

import CardOneComponent from "../../../components/CardComponent/CardOneComponent";

import TestimonialPictureOne from '../../../assets/imgs+icons/TestimonialPicture.png'
import TestimonialPictureTwo from '../../../assets/imgs+icons/TestimonialPicture2.png'
import IllustrationQuote from '../../../assets/imgs+icons/IllustrationQuote.svg'

export default function TestimonialsSection() {
    return (
        <div className="TestimonialsSection">
            <CardOneComponent>
                <div className="head">
                    <div className="picture">
                        <img src={TestimonialPictureOne} alt="user picture" />
                    </div>
                    <div className="initials">
                        <p className="name">John Doe</p>
                        <small className="workPosition">CEO, PrettyDopeDesigns</small>
                    </div>
                    <div className="IllustrationQuote">
                        <img src={IllustrationQuote} alt="quote" />
                    </div>
                </div>
                <p>“It was awesome to see VanGoux turn our MVP designs into code within minutes.”</p>
            </CardOneComponent>
            <CardOneComponent>
                <div className="head">
                    <div className="picture">
                        <img src={TestimonialPictureTwo} alt="user picture" />
                    </div>
                    <div className="initials">
                        <p className="name">Jane Goodman</p>
                        <small className="workPosition">Founder, ImpactNation</small>
                    </div>
                    <div className="IllustrationQuote">
                        <img src={IllustrationQuote} alt="quote" />
                    </div>
                </div>
                <p>“It was awesome to see VanGoux turn our MVP designs into code within minutes.”</p>
            </CardOneComponent>
        </div>
    )
}
