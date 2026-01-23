import './Add.scss';

function Add(props) {
    const {
        placeholder,
        id,
        value,
        onChange,
        addItem,
        ref
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
            ref={ref}
            />
            <button 
            title='Add new note'
            className="frame__add"
            type='submit'
            >
                <span>ADD</span>
            </button>
        </form>
    )
}

export default Add