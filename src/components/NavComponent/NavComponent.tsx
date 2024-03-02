import './NavComponent.css'

import ButtonComponent from '../ButtonComponent.tsx/ButtonComponent'

import Logo from '../../assets/imgs+icons/Logo.svg'

export default function NavComponent() {
    return (
        <nav className='NavComponent'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <ul>
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
            </ul>
        </nav>
    )
}
