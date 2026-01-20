import FrameTitle from '@/entities/frame-title/FrameTitle';
import Table from '@/entities/table/Table';
import Logo from '@/shared/ui/logo/Logo';
import { useState } from 'react';
import './Note.scss';

function Note() {
    const [notes, setNotes] = useState([
        {id: 'note-1', Word: 'Aplication', Translate: 'Приложение', Tag: '#software'},
        {id: 'note-2', Word: 'Network', Translate: 'Соединение', Tag: '#network'}
    ])

    const [newNoteTitle, setNewNoteTitle] = useState('')

    const [isActive, setIsActive] = useState(false)
    const [activeEdit, setActiveEdit] = useState({
        id: null,
        field: null
    })

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
        if(newNoteTitle.trim().length > 0) {
            const newNote = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                Word: newNoteTitle,
                Translate: '',
                Tag: ''
            }
            setNotes([...notes, newNote])
            setNewNoteTitle('')
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

    return (
        <div className='container'>
            <FrameTitle 
            title='Your notes!' 
            newNoteTitle={newNoteTitle}
            setNewNoteTitle={setNewNoteTitle}
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
            />
        </div>
    )
}

export default Note