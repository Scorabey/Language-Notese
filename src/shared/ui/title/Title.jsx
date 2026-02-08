import { memo } from 'react'
import styles from './Title.module.scss'

export const Title = ({ note }) => {

    return (
        <div className={styles.title}>
            <h2>{note.Word}</h2>
            <h2>{note.Translate?.length === 0 ? 'Empty translate' : note.Translate}</h2>
        </div>
    )
}

export default memo(Title)