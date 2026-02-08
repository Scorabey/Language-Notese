import { useState } from "react"
import styles from './Details.module.scss'
import Title from "@/shared/ui/title/Title"
import Description from "@/shared/ui/description/Description"
import Tags from "../../shared/ui/tags/Tags"

export const Details = ({ note }) => {

    const [isEditing, setIsEditing] = useState(false)

    const save = () => {
        setIsEditing(false)
    }

    const Tag = note.Tag?.trim() || 'Tag'

    const URL = `https://www.google.com/search?q=${encodeURIComponent(Tag)}`

    return (
        <div className={styles.container}>
            <Title note={note} />
            <main className={styles.main}>
                <Description 
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                save={save}
                note={note}
                />
                <Tags 
                Tag={Tag}
                URL={URL}
                />
            </main>
        </div>
    )
}

export default Details