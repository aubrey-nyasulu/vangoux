import './CardComponent.css'

export default function CardComponent({ children }: { children: React.ReactNode }) {
    return (
        <div className="CardComponent">
            {children}
        </div>
    )
}
