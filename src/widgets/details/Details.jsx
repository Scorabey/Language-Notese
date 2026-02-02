import { memo, useMemo } from "react"
import styles from './Details.module.scss'
import Title from "@/shared/ui/title/"
import Main from "@/entities/details-main"

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
            <Title note={note} />
            <Main 
            note={note} 
            tag={tag}
            />
        </div>
    )
}

export default memo(Details)