import Search from '@/shared/ui/search/Search'
import Wrapper from '../wrapper/Wrapper'
import './Table.scss'

function Table(props) {
    const {
        notes,
        deleteNote,
        isActive,
        toggle,
        activeEdit,
        toggleRename
    } = props

    const filteredTasks = (name) => (query) => {
        console.log(`Search on ${name}: ${query}`)
    }

    return (
        <div className="table">
            <Search 
            type='search' 
            title='Your original word!'
            onSearchInput={filteredTasks('Original')}
            />
            <Search 
            type='search' 
            title='Your translate word!'
            onSearchInput={filteredTasks('Translate')}
            />
            <Search 
            type='search' 
            title='Your tag!'
            onSearchInput={filteredTasks('Tag')}
            />
            <Wrapper
            deleteNote={deleteNote}
            notes={notes}
            isActive={isActive}
            activeEdit={activeEdit}
            toggle={toggle}
            toggleRename={toggleRename}
            />
        </div>
    )
}

export default Table