import Button from '../ButtonComponent.tsx/ButtonComponent'
import './TypographyComponent.css'

export default function TypographyComponent({ children }: { children: React.ReactNode }) {
    return (
        <div className='TypographyComponent'>
            {children}
        </div>
    )
}
