import './Input.scss'

function Input(props) {
    const {
        title,
        placeholder,
        id
    } = props

    return (
        <div className="frame__labelInput">
            <label htmlFor={id}>{title}</label>
            <input type="text" id={id} placeholder={placeholder} />
        </div>
    )
}

export default Input