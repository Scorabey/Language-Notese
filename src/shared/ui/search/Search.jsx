import { NotesContext } from '@/shared/model/context/NotesContext'
import { memo, useContext } from 'react'
import styles from './Search.module.scss'

export const Search = (props) => {
  const { title, type } = props

  const { searchQuery, setSearchQuery } = useContext(NotesContext)

  return (
    <form
      className={styles.tableSearchFrame}
      onSubmit={(event) => event.preventDefault()}
    >
      <label className={styles.tableSearchLabel} htmlFor="Search">
        {title}
      </label>
      <input
        className={styles.tableSearch}
        type={type}
        id="Search"
        placeholder="Search note"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  )
}

export default memo(Search)
