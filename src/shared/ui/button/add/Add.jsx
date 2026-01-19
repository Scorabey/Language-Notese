import './Add.scss';

function Add(props) {
    const {
        addItem,
        placeholder,
        id
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
            />
            <button 
            className="frame__add"
            type='submit'
            onSubmit={onSubmit}
            >
                <span>Add</span>
            </button>
        </form>
    )
}

export default Add