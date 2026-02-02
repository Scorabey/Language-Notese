import Tag from '@/shared/ui/tag/'
import styles from './Main.module.scss'

export const Main = (props) => {
    const { note, tag } = props

    return (
        <main className={styles.main}>
            <span className={styles.spanTitle}>{note.Word} - <br/><span className={styles.description}>{note.Description}</span></span>
            <div className={styles.frame}>
                <Tag
                note={note}
                tag={tag}
                />
            </div>
        </main>
    )
}

export default Main