import { useEffect, useRef, useState } from "react"
import styles from './Details.module.scss'
import Title from "@/shared/ui/title/Title"
import Description from "@/shared/ui/description/Description"
import Tags from "@/shared/ui/tags/Tags"
import noteApi from "@/shared/api/notesAPI"
import useResize from "@/shared/model/hooks/useResize"

export const Details = ({ note }) => {

    const { width, height } = useResize()

    console.log(`Width: ${width}, Height: ${height}`)

    const [isEditing, setIsEditing] = useState(false)
    const [textareaValue, setTextareaValue] = useState(null)

    const textAreaRef = useRef(null)

    useEffect(() => {
        noteApi.getById(note.id).then(noteData => {
            setTextareaValue(noteData.Description)
        })

    }, [note.id])

    const save = async () => {
        try {
            await noteApi.saveDescription(note.id, textareaValue)
            console.log('Save succes')
            setIsEditing(false)
        } catch (error) {
            console.error(`Fail to save: ${error}`)
        }
    }

    const AutoResize = () => {
        const textarea = textAreaRef.current
        if(textarea) {
            textarea.style.height = 'auto'
            textarea.style.height = textarea.scrollHeight + 'px'
        }
    }

    const Tag = note.Tag?.trim() || 'Tag'

    const URL = `https://www.google.com/search?q=${encodeURIComponent(Tag)}`

    return (
        <div className={styles.container}>
            <Title note={note} />
            <main className={styles.main}>
                <Description 
                textAreaRef={textAreaRef}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                save={save}
                note={note}
                textareaValue={textareaValue}
                setTextareaValue={setTextareaValue}
                AutoResize={AutoResize}
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