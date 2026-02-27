import { memo } from 'react'
import styles from './Tag.module.scss'

interface Props {
    tag: string;
}

export const Tag = ({tag}: Props) => {

    return (
        <div className={styles.frameTag}>
            {tag
            ?
            <a
            className={styles.link}
            href={`https://www.google.com/search?q=What+is+${encodeURIComponent(tag)}`}
            target="_blank"
            rel="noopener noreferrer"
            >
                {tag}
            </a> 
            :
            <span>Empty tag</span>}
        </div>
    )
}

export default memo(Tag)