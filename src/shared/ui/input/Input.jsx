import { Add } from '@/shared/ui/button/add'
import { memo } from 'react'
import './Input.scss'

export const Input = (props) => {

    const {
        title,
        placeholder,
        id,
        newNotesInputRef,
        addItem
    } = props

    return (
        <div className="frame__labelInput">
            <label htmlFor={id}>{title}</label>
            <Add 
            id={id} 
            placeholder={placeholder}
            ref={newNotesInputRef}
            addItem={addItem}
            />
        </div>
    )
}

export default memo(Input)