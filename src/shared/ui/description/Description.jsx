import { memo } from 'react'
import styles from './Description.module.scss'

export const Description = (props) => {
    const {
        note, 
        isEditing, 
        setIsEditing, 
        save, 
        AutoResize,
        textAreaRef,
        textareaValue,
        setTextareaValue
    } = props

    return (
        <section
        onDoubleClick={() => setIsEditing(true)}
        className={styles.description}
        >
            <h3>{note.Word} — </h3>
            {isEditing
            ? (
            <textarea 
            ref={textAreaRef}
            placeholder="Type text..." 
            onChange={(event) => {
                setTextareaValue(event.target.value)
                AutoResize()
            }}
            onInput={AutoResize}
            onBlur={() => save()}
            autoFocus 
            />)
            : (
            <p>{textareaValue?.length === 0 ? 'Double tap to change description!' : textareaValue}</p>)}
        </section>
    )
}

export default memo(Description)