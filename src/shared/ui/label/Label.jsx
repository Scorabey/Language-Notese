import './Label.scss'

function Label(props) {
    const {
        title
    } = props

    return (
        <div className="table__search-frame">
            <h3 className='table__title'>{title}</h3>
        </div>
    )
}

export default Label