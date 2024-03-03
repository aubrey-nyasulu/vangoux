import './HowItWorksSection.css'

import CardComponent from "../../../components/CardComponent/CardComponent";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import UploadIcon from '../../../assets/imgs+icons/IconUpload.svg'
import DecorationJuju from '../../../assets/imgs+icons/DecorationJuju@2x.svg'

export default function HowItWorksSection() {
    return (
        <section className="HowItWorksSection">
            <SectionTitle title="How VanGoux works" />
            <div className="cards">
                <CardComponent>
                    <div className="head">
                        <div className="text">
                            <small>
                                setp 1
                            </small>
                            <p>Upload Sketch</p>
                        </div>
                        <div className="downloadIcon">
                            <img src={UploadIcon} alt="" />
                        </div>
                    </div>
                    <div className="body">
                        <div className="text">
                            <p>Upload design for your site, landing page or portfolio</p>
                        </div>
                        <div className="cornericon">
                            <img src={DecorationJuju} alt="" />
                        </div>
                    </div>
                </CardComponent>
                <div className="dottconnector"></div>
                <CardComponent>
                    <div className="head">
                        <div className="text">
                            <small>
                                setp 1
                            </small>
                            <p>Upload Sketch</p>
                        </div>
                        <div className="downloadIcon">
                            <img src={UploadIcon} alt="" />
                        </div>
                    </div>
                    <div className="body">
                        <div className="text">
                            <p>Upload design for your site, landing page or portfolio</p>
                        </div>
                        <div className="cornericon">
                            <img src={DecorationJuju} alt="" />
                        </div>
                    </div>
                </CardComponent>
                <div className="dottconnector"></div>
                <CardComponent>
                    <div className="head">
                        <div className="text">
                            <small>
                                setp 1
                            </small>
                            <p>Upload Sketch</p>
                        </div>
                        <div className="downloadIcon">
                            <img src={UploadIcon} alt="" />
                        </div>
                    </div>
                    <div className="body">
                        <div className="text">
                            <p>Upload design for your site, landing page or portfolio</p>
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
