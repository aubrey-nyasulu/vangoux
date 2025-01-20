import './UlListComponent.css'

export default function UlListComponent({ children }: { children: React.ReactNode }) {
    return (
        <ul className='UlListComponent'>
            {children}
        </ul>
    )
}
