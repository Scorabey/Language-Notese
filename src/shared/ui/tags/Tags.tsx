import { memo } from 'react'
import styles from './Tags.module.scss'

interface Props {
    Tag: string;
    URL: string;
}

export const Tags = ({ Tag, URL }: Props) => {

    return (
        <ul className={styles.tags}>
            <li className={styles.tag}><a href={URL} target="_blank">{Tag}</a></li>
        </ul>
    )
}

export default memo(Tags)