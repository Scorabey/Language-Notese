import Add from '../button/add/Add'
import './Input.scss'

function Input(props) {

    const {
        title,
        placeholder,
        id,
        newNotesInputRef,
        addItem
    } = props

    return (
        <div className="frame__labelInput">
            <label htmlFor={id}>{title}</label>
            <Add 
            id={id} 
            placeholder={placeholder}
            ref={newNotesInputRef}
            addItem={addItem}
            />
        </div>
    )
}

export default Input