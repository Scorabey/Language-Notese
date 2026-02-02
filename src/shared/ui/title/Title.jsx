import styles from './Title.module.scss'
import { memo } from 'react'

export const Title = ({ note }) => {
    return (
        <div className={styles.title}>
            <h2>{note.Word}</h2>
            <h2>{note.Translate ? note.Translate : 'Empty Translate!'}</h2>
        </div>
    )
}

export default memo(Title)