import { memo, useMemo } from "react"
import styles from './Details.module.scss'

export const Details = (props) => {
    const { note } = props

    const tag = useMemo(() => {
        if(!note?.Tag) return ''

        return note.Tag.startsWith('#') 
        ? note.Tag.slice(1) 
        : note.Tag
    }, [note.Tag])

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{note.Word}</h2>
                <h2>{note.Translate ? note.Translate : 'Empty Translate!'}</h2>
            </div>
            <main className={styles.main}>
                <span className={styles.spanTitle}>{note.Word} - <br/><span className={styles.description}>{note.Description}</span></span>
                <div className={styles.frame}>
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
                </div>
            </main>
        </div>
    )
}

export default memo(Details)