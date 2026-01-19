import './Search.scss'

function Search(props) {
    const {
        title,
        type,
        onSearchInput,
    } = props

    return (
        <form 
        className="table__search-frame"
        onSubmit={(event) => event.preventDefault()}
        >
            <label 
            className='table__label' 
            htmlFor="search"
            >
                {title}
            </label>
            <input 
            className='table__search'
            type={type} 
            id='search' 
            placeholder='Search...' 
            onInput={(event) => onSearchInput(event.target.value)}
            />
        </form>
    )
}

export default Search