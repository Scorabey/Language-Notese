import Tag from '@/shared/ui/tag/'
import styles from './Main.module.scss'
import Description from '@/shared/ui/description/'
import Rename from '@/shared/ui/button/rename/Rename'
import { useState } from 'react'

export const Main = (props) => {
    const { note, tag } = props

    const [isEditing, setIsEditing] = useState(false)
    const [value, setValue] = useState('')

    return (
        <main className={styles.main}>
            <div className={styles.frameDescription}>
                <Description 
                note={note} 
                />
                <div className={styles.frameButton}>
                    <Rename
                    />
                </div>
            </div>
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