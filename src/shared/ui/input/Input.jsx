import { NotesContext } from '@/shared/model/context/NotesContext'
import { Add } from '@/shared/ui/button/add'
import { memo, useContext, useState } from 'react'
import styles from './Input.module.scss'

export const Input = (props) => {
  const { title, placeholder, id } = props

  const { newNoteWord } = useContext(NotesContext)

  const [error, setError] = useState('')

  const emptyNote = newNoteWord?.trim()
  const isNoteEmpty = emptyNote.length === 0

  return (
    <div className={styles.frameLabelInput}>
      <label htmlFor={id}><h3>{title}</h3></label>
      <Add
        id={id}
        placeholder={placeholder}
        isDisabled={isNoteEmpty}
        emptyNote={emptyNote}
        error={error}
        setError={setError}
      />
    </div>
  )
}

export default memo(Input)
