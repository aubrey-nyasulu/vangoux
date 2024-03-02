import './ButtonComponent.css'

export default function Button({ label }: { label: string }) {
    return (
        <button className="ButtonComponent">{label}</button>
    )
}
