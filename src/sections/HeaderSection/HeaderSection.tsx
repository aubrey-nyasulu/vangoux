import './HeaderSection.css'

import NavComponent from "../../components/NavComponent/NavComponent"
import TypographyComponent from '../../components/TypographyComponent/TypographyComponent'
import Button from '../../components/ButtonComponent.tsx/ButtonComponent'

import HeaderVisual from '../../assets/imgs+icons/IllustrationMain.svg'

export default function HeaderSection() {
    return (
        <header className="HeaderSection">
            <NavComponent />
            <div className="typoNvisual">
                <TypographyComponent>
                    <div className="text">
                        <h1>Launch beautiful websites directly from Sketch</h1>
                        <p>Create pixel perfect websites, landing pages &   directly from your Sketch designs</p>
                    </div>
                    <Button label='Upload Your Sketch File' />
                </TypographyComponent>
                <div className="HeaderVisual">
                    <img src={HeaderVisual} alt="" />
                </div>
            </div>
        </header>
    )
}
