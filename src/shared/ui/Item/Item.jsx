import { NotesContext } from '@/shared/model/context/NotesContext'
import { Delete } from '@/shared/ui/button/delete'
import { Rename } from '@/shared/ui/button/rename'
import { memo, useContext } from 'react'
import styles from './Item.module.scss'
import RouterLink from '@/pages/RouterLink'

export const Item = (props) => {
  const { deleteNote, isHidden, title, id, field, value, toggle, isActive } =
    props

  const { updateNote, disapearingNoteId } = useContext(NotesContext)

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form 
    className={`
      ${styles.wrapperItem} 
      ${(disapearingNoteId === id ? styles.isDisapearing : '')}
      `} 
    onSubmit={onSubmit}>
      {isActive ? (
        <input
          title="Input new title note"
          value={value}
          type="text"
          id="rename"
          placeholder="Rename..."
          autoFocus
          onChange={(event) => updateNote(id, field, event.target.value)}
        ></input>
      ) : (
        <RouterLink to={`/notes/${id}`} aria-label='Note details page'>
          <span onDoubleClick={toggle}>
            {value.trim() === '' ? title : value}
          </span>
        </RouterLink>
      )}
      <div className={styles.wrapperItemFrame}>
        <Rename toggle={toggle} isActive={isActive} />
        <Delete deleteNote={deleteNote} isHidden={isHidden} />
      </div>
    </form>
  )
}

export default memo(Item)
