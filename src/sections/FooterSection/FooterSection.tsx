import './FooterSection.css'

import CardComponent from "../../components/CardComponent/CardComponent";
import UlListComponent from "../../components/NavComponent/UlListComponent";
import NavComponent from '../../components/NavComponent/NavComponent';

import LogoSmallSolid from '../../assets/imgs+icons/LogoSmallSolid.svg'
import VincentIllustration from '../../assets/imgs+icons/VincentIllustration.png'
import IconFacebook from '../../assets/imgs+icons/IconFacebook.svg'
import IconInstagram from '../../assets/imgs+icons/IconInstagram.svg'

export default function FooterSection() {
    return (
        <footer>
            <div className="wrapper">
                <NavComponent>
                    <CardComponent>
                        <div className="head">
                            <div className="icon">
                                <img src={LogoSmallSolid} alt="" />
                            </div>
                            <div className="text">
                                <p>Site made with VanGoux</p>
                            </div>
                        </div>
                    </CardComponent>
                    <UlListComponent>
                        <UlListComponent>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#howItWorks">Feedback</a>
                            </li>
                            <li>
                                <a href="#howItWorks">Join our Slack</a>
                            </li>
                            <li>
                                <a href="#howItWorks">Terms</a>
                            </li>
                        </UlListComponent>
                    </UlListComponent>
                    <div className='socialIcons'>
                        <img src={IconFacebook} alt="facebook icon" />
                        <img src={IconInstagram} alt="instagram icon" />
                    </div>
                </NavComponent>
                <div>
                    <img src={VincentIllustration} alt="illustration" />
                </div>
            </div>
        </footer>
    )
}
