import './NavComponent.css'

export default function NavComponent({ children }: { children: React.ReactNode }) {
    return (
        <nav className='NavComponent'>
            {children}
        </nav>
    )
}
