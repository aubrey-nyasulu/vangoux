import './HeaderSection.css'

import NavComponent from "../../components/NavComponent/NavComponent"
import UlListComponent from '../../components/NavComponent/UlListComponent'
import TypographyComponent from '../../components/TypographyComponent/TypographyComponent'
import ButtonComponent from '../../components/ButtonComponent.tsx/ButtonComponent'

import HeaderVisual from '../../assets/imgs+icons/IllustrationMain.svg'
import Logo from '../../assets/imgs+icons/Logo.svg'

export default function HeaderSection() {
    return (
        <header className="HeaderSection">
            <NavComponent>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <UlListComponent>
                    <li>
                        <a href="#howItWorks">How It Works</a>
                    </li>
                    <li>
                        <a href="#howItWorks">Features</a>
                    </li>
                    <li>
                        <a href="#howItWorks">Use Cases</a>
                    </li>
                    <li>
                        <a href="#howItWorks">Schedule a Demo</a>
                    </li>
                    <ButtonComponent label='UPLOAD SKETCH' />
                </UlListComponent>
            </NavComponent>
            <div className="typoNvisual">
                <TypographyComponent>
                    <div className="text">
                        <h1>Launch beautiful websites directly from Sketch</h1>
                        <p>Create pixel perfect websites, landing pages &   directly from your Sketch designs</p>
                    </div>
                    <ButtonComponent label='Upload Your Sketch File' />
                </TypographyComponent>
                <div className="HeaderVisual">
                    <img src={HeaderVisual} alt="" />
                </div>
            </div>
        </header>
    )
}