import { memo, useMemo } from "react"
import styles from './Details.module.scss'

export const Details = (props) => {
    const { note } = props 

    let Tag = useMemo(() => {
        if(!note?.Tag) return ''

        return note.Tag.startsWith('#') 
        ? note.Tag.slice(1) 
        : note.Tag
    }, [note.Tag])

    return (
        <>
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{note.Word}</h2>
                <h2>{note.Translate ? note.Translate : 'Empty Translate!'}</h2>
            </div>
            <main className={styles.main}>
                <a 
                href={`https://www.google.com/search?q=${encodeURIComponent(Tag)}`}
                target="_blank"
                >
                    {note.Tag}
                </a>
            </main>
        </div>
        </>
    )
}

export default memo(Details)