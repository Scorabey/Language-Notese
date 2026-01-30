import { Wrapper } from '@/entities/wrapper'
import { Label } from '@/shared/ui/label'
import { Search } from '@/shared/ui/search'
import { memo } from 'react'
import styles from './Table.module.scss'

export const Table = () => {
  return (
    <div className={styles.table}>
      <Label title="Your original word!" />
      <Search type="search" title="Your translate word!" />
      <Label title="Your tag!" />
      <Wrapper />
    </div>
  )
}

export default memo(Table)
