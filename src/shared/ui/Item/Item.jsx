import Delete from '../button/delete/Delete'
import Rename from '../button/rename/Rename'
import './Item.scss'

function Item(props) {
    const {
        isHidden,
        title,
        deleteNote,
        toggle,
        isActive,
        id,
        field,
        value,
        updateNote,
    } = props

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
    <form
    className="wrapper__item wrapper__item-original"
    onSubmit={onSubmit}
    >
         {isActive
        ? <input
        value={value}
        type='text'
        id='rename'
        placeholder='Rename...'
        autoFocus
        onChange={(event) => updateNote(id, field, event.target.value)}
        >

        </input>
        : <span onDoubleClick={toggle}>{value ?? title}</span>}
        <div className="wrapper__item-frame">
            <Rename
            toggle={toggle}
            isActive={isActive}
            />
            <Delete 
            isHidden={isHidden}
            deleteNote={deleteNote}
            />
        </div>
    </form>
    )
}

export default Item