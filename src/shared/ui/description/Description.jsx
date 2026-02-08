import { memo } from 'react'
import styles from './Description.module.scss'

export const Description = (props) => {
    const { note, isEditing, setIsEditing, save } = props

    return (
        <section
        onDoubleClick={() => setIsEditing(true)}
        className={styles.description}
        >
            <h3>{note.Word} — </h3>
            {isEditing
            ? (
            <textarea 
            placeholder="Type text..." 
            onBlur={() => save()}
            autoFocus 
            />)
            : (
            <p>{note.Description.length === 0 ? 'Double tap to change description!' : note.Description}</p>)}
        </section>
    )
}

export default memo(Description)