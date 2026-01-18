import './Search.scss'

function Search(props) {
    const {
        title,
        type
    } = props

    return (
        <div className="table__search-frame">
            <label className='table__label' htmlFor="search">{title}</label>
            <input className='table__search' type={type} id='search' placeholder='Search...' />
        </div>
    )
}

export default Search