import './Item.scss'

function Item(props) {
    const {
        Rename,
        Delete,
        title
    } = props

    return (
    <div className="wrapper__item wrapper__item-original">
        <span>{title}</span>
        <div className="wrapper__item-frame">
            {Rename}
            {Delete}
        </div>
    </div>
    )
}

export default Item