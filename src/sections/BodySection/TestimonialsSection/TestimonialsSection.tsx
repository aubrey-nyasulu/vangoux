import './TestimonialsSection.css'

import CardComponent from "../../../components/CardComponent/CardComponent";

import TestimonialPictureOne from '../../../assets/imgs+icons/TestimonialPicture.png'
import TestimonialPictureTwo from '../../../assets/imgs+icons/TestimonialPicture2.png'
import IllustrationQuote from '../../../assets/imgs+icons/IllustrationQuote.svg'

export default function TestimonialsSection() {
    return (
        <section className="TestimonialsSection">
            <CardComponent>
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
                <p>“Our senior frontend developer was 70% faster in building React.js components thanks to VanGoux!”</p>
            </CardComponent>

            <CardComponent>
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
            </CardComponent>
        </section>
    )
}
