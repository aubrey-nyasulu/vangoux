import './TypographyComponent.css'

export default function TypographyComponent({ children }: { children: React.ReactNode }) {
    return (
        <div className='TypographyComponent relative'>
            {children}
        </div>
    )
}
