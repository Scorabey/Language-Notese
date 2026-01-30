import { Input } from '@/shared/ui/input'
import { memo } from 'react'
import styles from './FrameTitle.module.scss'

export const FrameTitle = (props) => {
  const { title } = props

  return (
    <div className={styles.frame}>
      <h2 className={styles.frameTitle}>{title}</h2>
      <Input
        title="Input new note"
        placeholder="Write new note..."
        id="create"
      />
    </div>
  )
}

export default memo(FrameTitle)
