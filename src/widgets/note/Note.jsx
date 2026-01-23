import FrameTitle from '@/entities/frame-title/FrameTitle';
import Table from '@/entities/table/Table';
import Logo from '@/shared/ui/logo/Logo';
import { useEffect, useRef, useState } from 'react';
import './Note.scss';

function Note() {
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
    const toggle = () => {
        setIsActive(prev => !prev)
    }
    const addItem = () => {
        const newNoteTitle = newNotesInputRef.current.value

        if(newNoteTitle.trim().length > 0) {
            const newNote = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                Word: newNoteTitle,
                Translate: null,
                Tag: null
            }
            setNotes([...notes, newNote])
            newNotesInputRef.current.value = ''
            setSearchQuery('')
            newNotesInputRef.current.focus()
        }
    }
    const deleteNote = (noteId) => {
        const isConfirmed = confirm('Are you sure delete this note?')

        if(isConfirmed) {
            setNotes(
                notes.filter((note) => note.id !== noteId)
            )
        }
    }
    const updateNote = (id, field, value) => {
        setNotes(prev => 
            prev.map(note => 
                note.id === id
                ? {...note, [field]: value}
                : note
            )
        )
    }
    const clearSearchQuery = searchQuery.trim().toLowerCase()
    const filteredNotes = clearSearchQuery.length > 0
        ? notes.filter(note => 
            (note.Word && note.Word.toLowerCase().includes(clearSearchQuery)) ||
            (note.Translate && note.Translate.toLowerCase().includes(clearSearchQuery)) ||
            (note.Tag && note.Tag.toLowerCase().includes(clearSearchQuery))
        )
        : notes

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