import './SectionTitle.css'

import SectionTitleDecorationLine from '../../assets/imgs+icons/SectionTitleDecorationLine.svg'

export default function SectionTitle({ title }: { title: string }) {
    return (
        <div className="SectionTitle">
            <h2>{title}</h2>
            <div className="decline">
                <img src={SectionTitleDecorationLine} alt="decoration line" />
            </div>
        </div>
    )
}
