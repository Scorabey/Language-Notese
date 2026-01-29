import { NotesProvider } from "../shared/model/context/NotesProvider"
import Note from "../widgets/note/Note"

const NotesPage = () => {
    return (
        <NotesProvider>
            <h1 className="visually-hidden">Language notes</h1>
            <Note />
        </NotesProvider>
    )
}

export default NotesPage