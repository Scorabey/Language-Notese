import './Label.scss'

function Label(props) {
    const {
        title
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
        </form>
    )
}

export default Label