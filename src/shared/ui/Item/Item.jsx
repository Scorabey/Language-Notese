import Delete from '../button/delete/Delete'
import Rename from '../button/rename/Rename'
import './Item.scss'

function Item(props) {
    const {
        isHidden,
        title,
        deleteNote,
        toggle,
        isActive
    } = props

    return (
    <div className="wrapper__item wrapper__item-original">
         <span>{title}</span>
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
    </div>
    )
}

export default Item