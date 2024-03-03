import './WhatSection.css'

import CardComponent from "../../../components/CardComponent/CardComponent";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import IconSolidRealisticPrototype from '../../../assets/imgs+icons/IconSolidRealisticPrototype.svg'

export default function WhatSection() {
    return (
        <section className="WhatSection">
            <SectionTitle title="What can you do with VanGoux" />
            <div className="cards">
                <CardComponent>
                    <div className="head">
                        <div className="icon">
                            <img src={IconSolidRealisticPrototype} alt="" />
                        </div>
                        <div className="text">
                            <p>Make realistic prototypes</p>
                        </div>
                    </div>
                </CardComponent>
                <CardComponent>
                    <div className="head">
                        <div className="icon">
                            <img src={IconSolidRealisticPrototype} alt="" />
                        </div>
                        <div className="text">
                            <p>Make realistic prototypes</p>
                        </div>
                    </div>
                </CardComponent>
                <CardComponent>
                    <div className="head">
                        <div className="icon">
                            <img src={IconSolidRealisticPrototype} alt="" />
                        </div>
                        <div className="text">
                            <p>Make realistic prototypes</p>
                        </div>
                    </div>
                </CardComponent>
                <CardComponent>
                    <div className="head">
                        <div className="icon">
                            <img src={IconSolidRealisticPrototype} alt="" />
                        </div>
                        <div className="text">
                            <p>Make realistic prototypes</p>
                        </div>
                    </div>
                </CardComponent>
            </div>
        </section>
    )
}
