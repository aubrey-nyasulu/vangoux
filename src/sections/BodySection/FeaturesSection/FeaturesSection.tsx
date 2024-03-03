import './FeaturesSection.css'

import CardComponent from "../../../components/CardComponent/CardComponent";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


import DecorationJuju from '../../../assets/imgs+icons/DecorationJuju@2x.svg'
import IconSolidPixelPerfect from '../../../assets/imgs+icons/IconSolidPixelPerfect.svg'
import IconSolidFlexibleResponsive from '../../../assets/imgs+icons/IconSolidFlexibleResponsive.svg'
import IconSolidReusableComponents from '../../../assets/imgs+icons/IconSolidReusableComponents.svg'


export default function FeaturesSection() {
    return (
        <section className="FeaturesSection">
            <SectionTitle title="Features" />
            <div className="cards">
                <CardComponent>
                    <div className="head">
                        <div className="icon">
                            <img src={IconSolidPixelPerfect} alt="" />
                        </div>
                        <div className="text">
                            <p>Pixel perfect output</p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="text">
                            <p>Crisp, pixel-perfect landing pages without bothering your developers</p>
                        </div>
                        <div className="cornericon">
                            <img src={DecorationJuju} alt="" />
                        </div>
                    </div>
                </CardComponent>
                <CardComponent>
                    <div className="head">
                        <div className="icon">
                            <img src={IconSolidFlexibleResponsive} alt="" />
                        </div>
                        <div className="text">
                            <p>Flexible & responsive</p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="text">
                            <p>Your web pages will flexibly adapt to different browser window sizes</p>
                        </div>
                        <div className="cornericon">
                            <img src={DecorationJuju} alt="" />
                        </div>
                    </div>
                </CardComponent>
                <CardComponent>
                    <div className="head">
                        <div className="icon">
                            <img src={IconSolidReusableComponents} alt="" />
                        </div>
                        <div className="text">
                            <p>Complete code freedom</p>
                        </div>
                    </div>
                    <div className="body">
                        <div className="text">
                            <p>VanGoux gives you source code of your website, so you can add your own logic</p>
                        </div>
                        <div className="cornericon">
                            <img src={DecorationJuju} alt="" />
                        </div>
                    </div>
                </CardComponent>
            </div>
        </section>
    )
}
