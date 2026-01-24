import { FrameTitle } from '@/entities/frame-title';
import { Table } from '@/entities/table';
import { Logo } from '@/shared/ui/logo';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './Note.scss';

export const Note = () => {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem('notes')

        if(savedNotes) {
            return JSON.parse(savedNotes)
        }

        return  [
        {id: 'note-1', Word: 'Aplication', Translate: 'Приложение', Tag: '#software'},
        {id: 'note-2', Word: 'Network', Translate: 'Соединение', Tag: '#network'}
    ]
    })

    const newNotesInputRef = useRef(null)

    const [isActive, setIsActive] = useState(false)

    const [activeEdit, setActiveEdit] = useState({
        id: null,
        field: null
    })

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    useEffect(() => {
        newNotesInputRef.current.focus()
    }, [])
    const toggleRename = (id, field) => {
        setActiveEdit(prev => 
            prev.id === id && prev.field === field 
            ? {id: null, field: null}
            : {id, field}
        )
    }
    const toggle = useCallback(() => {
        setIsActive(prev => !prev)
    }, [])
    const addItem = useCallback(() => {
        const value = newNotesInputRef.current.value
        if(!value.trim().length > 0) return

        setNotes(prev => [
            ...prev,
            {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                Word: value,
                Translate: null,
                Tag: null
            }
        ])

        newNotesInputRef.current.value = ''
        setSearchQuery('')
        newNotesInputRef.current.focus()
    }, [])  
    const deleteNote = useCallback((noteId) => {
        const isConfirmed = confirm('Are you sure delete this note?')

        if(isConfirmed) {
            setNotes(prevNotes => 
                prevNotes.filter((note) => note.id !== noteId)
            )
        }
    }, [])
    const updateNote = useCallback((id, field, value) => {
        setNotes(prev => 
            prev.map(note => 
                note.id === id
                ? {...note, [field]: value}
                : note
            )
        )
    }, [])
    const clearSearchQuery = searchQuery.trim().toLowerCase()

    const filteredNotes = useMemo(() => {
        if(!clearSearchQuery) return notes

        return notes.filter(note => 
                        (note.Word && note.Word.toLowerCase().includes(clearSearchQuery)) ||
                        (note.Translate && note.Translate.toLowerCase().includes(clearSearchQuery)) ||
                        (note.Tag && note.Tag.toLowerCase().includes(clearSearchQuery))
                    )
    }, [notes, clearSearchQuery])

    return (
        <div className='container'>
            <FrameTitle 
            title='Your notes!'
            newNotesInputRef={newNotesInputRef}
            addItem={addItem}
            />
            <Logo />
            <Table
            deleteNote={deleteNote}
            notes={notes}
            isActive={isActive}
            activeEdit={activeEdit}
            toggle={toggle}
            toggleRename={toggleRename}
            updateNote={updateNote}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredNotes={filteredNotes}
            />
        </div>
    )
}

export default Note