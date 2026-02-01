import { useEffect, useState } from "react"
import noteApi from "../shared/api/notesAPI"
import Details from "../widgets/details/details"

const NotePage = (props) => {
    const { params } = props

    const noteId = params.id

    const [note, setNote] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        noteApi.getById(noteId).then((noteData) => {
            setNote(noteData)
            setHasError(false)
        })
        .catch(() => {
            setHasError(true)
        })
        .finally(() => {
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(hasError) {
        return <div><h1>Task not found!</h1></div>
    }

    return (
        <Details note={note} />
    )
}

export default NotePage