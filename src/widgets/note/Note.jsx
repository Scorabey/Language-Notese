import { FrameTitle } from '@/entities/frame-title'
import { Table } from '@/entities/table'
import { Logo } from '@/shared/ui/logo'
import styles from './Note.module.scss'
import FastScroll from '@/shared/ui/fastScroll/'
import Footer from '@/shared/ui/footer/'

export const Note = () => {

  return (
    <>
    <div className={styles.container}>
      <FastScroll />
      <FrameTitle title="Your notes!" />
      <Logo />
      <Table />
    </div>
    <Footer />
    </>
  )
}

export default Note
