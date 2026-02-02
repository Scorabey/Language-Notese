import { memo } from 'react'
import styles from './Tag.module.scss'

export const Tag = (props) => {
    const { note, tag } = props

    return (
        <div className={styles.frameTag}>
            {note.Tag
            ?
            <a
            className={styles.link}
            href={`https://www.google.com/search?q=What+is+${encodeURIComponent(tag)}`}
            target="_blank"
            rel="noopener noreferrer"
            >
                {note.Tag}
            </a> 
            :
            <span>Empty tag</span>}
        </div>
    )
}

export default memo(Tag)