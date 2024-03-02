import './CardOneComponent.css'

export default function CardOneComponent({ children }: { children: React.ReactNode }) {
    return (
        <div className="CardOneComponent">
            {children}
        </div>
    )
}
