import Add from '../button/add/Add'
import './Input.scss'

function Input(props) {

    const {
        title,
        placeholder,
        id,
        value,
        setNewNoteTitle,
        addItem
    } = props

    return (
        <div className="frame__labelInput">
            <label htmlFor={id}>{title}</label>
            <Add 
            id={id} 
            placeholder={placeholder}
            value={value}
            onChange={(event) => setNewNoteTitle(event.target.value)}
            addItem={addItem}
            />
        </div>
    )
}

export default Input