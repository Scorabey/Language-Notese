import Search from '@/shared/ui/search/Search'
import Wrapper from '../wrapper/Wrapper'
import './Table.scss'

function Table() {
    const filteredTasks = (query) => {
        console.log(`Поиск: ${query}`)
    }

    return (
        <div className="table">
            <Search 
            type='search' 
            title='Your original word!'
            onSearchInput={filteredTasks}
            />
            <Search 
            type='search' 
            title='Your translate word!'
            onSearchInput={filteredTasks}
            />
            <Search 
            type='search' 
            title='Your tag!'
            onSearchInput={filteredTasks}
            />
            <Wrapper />
        </div>
    )
}

export default Table