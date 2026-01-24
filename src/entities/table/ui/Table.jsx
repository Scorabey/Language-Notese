import { Wrapper } from '@/entities/wrapper'
import { Label } from '@/shared/ui/label'
import { Search } from '@/shared/ui/search'
import { memo } from 'react'
import './Table.scss'

export const Table = (props) => {
    const {
        notes,
        deleteNote,
        isActive,
        toggle,
        activeEdit,
        toggleRename,
        updateNote,
        setSearchQuery,
        searchQuery,
        filteredNotes
    } = props

    return (
        <div className="table">
            <Label title='Your original word!' />
            <Search 
            type='search' 
            title='Your translate word!'
            setSearchQuery={setSearchQuery}
            searchQuery={searchQuery}
            />
            <Label title='Your tag!' />
            <Wrapper
            deleteNote={deleteNote}
            notes={notes}
            isActive={isActive}
            activeEdit={activeEdit}
            toggle={toggle}
            toggleRename={toggleRename}
            updateNote={updateNote}
            filteredNotes={filteredNotes}
            />
        </div>
    )
}

export default memo(Table)