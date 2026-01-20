import Item from '@/shared/ui/Item/Item';
import './Wrapper.scss';

function Wrapper(props) {
    const {
        notes,
        deleteNote,
        toggleRename,
        activeEdit
    } = props

    return (
        <>
        <div className="wrapper">
            {notes.map(word => (
                <Item 
                key={word.id} 
                title={word.Word}
                deleteNote={() => deleteNote(word.id)}
                toggle={() => toggleRename(word.id, 'original')}
                isActive={
                    activeEdit.id === word.id &&
                    activeEdit.field === 'original'
                }
                />
            ))}
        </div>
        <div className="wrapper">
            {notes.map(word => (
                <Item 
                key={word.id} 
                isHidden={true} 
                title={word.Translate}
                deleteNote={() => deleteNote(word.id)}
                toggle={() => toggleRename(word.id, 'translate')}
                isActive={
                    activeEdit.id === word.id &&
                    activeEdit.field === 'translate'
                }
                />
            ))}
        </div>
        <div className="wrapper">
            {notes.map(word => (
                <Item 
                key={word.id} 
                title={word.Tag}
                deleteNote={() => deleteNote(word.id)}
                toggle={() => toggleRename(word.id, 'tag')}
                isActive={
                    activeEdit.id === word.id &&
                    activeEdit.field === 'tag'
                }
                />
            ))}
        </div>
        </>
    )
}

export default Wrapper