import Add from '../button/add/Add'
import './Input.scss'

function Input(props) {

    const {
        title,
        placeholder,
        id,
    } = props

    const addItem = () => {
        console.log('Add note')
    }

    return (
        <div className="frame__labelInput">
            <label htmlFor={id}>{title}</label>
            <Add id={id} placeholder={placeholder} addItem={addItem} />
        </div>
    )
}

export default Input