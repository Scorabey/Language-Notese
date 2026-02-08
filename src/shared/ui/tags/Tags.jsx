import { memo } from 'react'
import styles from './Tags.module.scss'

export const Tags = ({ Tag, URL }) => {

    return (
        <ul className={styles.tags}>
            <li className={styles.tag}><a href={URL} target="_blank">{Tag}</a></li>
        </ul>
    )
}

export default memo(Tags)