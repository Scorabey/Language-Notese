import './Add.scss';

function Add(props) {
    const {
        placeholder,
        id,
        value,
        onChange,
        addItem
    } = props

    const onSubmit = (event) => {
        event.preventDefault()
        addItem()
    }

    return (
        <form className='frame__input' onSubmit={onSubmit}>
            <input
            type="text" 
            id={id} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            />
            <button 
            className="frame__add"
            type='submit'
            >
                <span>Add</span>
            </button>
        </form>
    )
}

export default Add