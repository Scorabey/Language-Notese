import './Search.scss'

function Search(props) {
    const {
        title,
        type,
        searchQuery,
        setSearchQuery
    } = props

    return (
        <form 
        className="table__search-frame"
        onSubmit={(event) => event.preventDefault()}
        >
            <label 
            className='table__search-label' 
            htmlFor="search"
            >
                {title}
            </label>
            <input 
            className='table__search'
            type={type} 
            id='search' 
            placeholder='Search...'
            value={searchQuery}
            onInput={(event) => setSearchQuery(event.target.value)}
            />
        </form>
    )
}

export default Search