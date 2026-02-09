import useResize from '../../model/hooks/useResize'
import useScroll from '../../model/hooks/useScroll'
import styles from './FastScroll.module.scss'


const FastScroll = () => {

    const { height } = useResize()

    const { scrollPosY } = useScroll()

    const halfHeight = height / 2.5

    const scrollPosition = scrollPosY > halfHeight

    return (
        <div className={styles.container}>
            {scrollPosition 
            ? <button className={styles.scrollTop}></button> 
            : <button className={styles.scrollBottom}></button>}
        </div>
    )
}

export default FastScroll