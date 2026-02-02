import { memo } from 'react'
import styles from './Description.module.scss'

export const Description = ({ note }) => {
    return (
        <span className={styles.spanTitle}>{note.Word} - <br/><span className={styles.descriptionText}>{note.Description}</span></span>
    )
}

export default memo(Description)