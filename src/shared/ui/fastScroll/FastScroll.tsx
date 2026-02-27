import useResize from '../../model/hooks/useResize'
import useScroll from '../../model/hooks/useScroll'
import styles from './FastScroll.module.scss'


const FastScroll = () => {

    const { height } = useResize()

    const { scrollPosY } = useScroll()

    const halfHeight = height / 2.5

    const scrollPosition = scrollPosY > halfHeight

    const scrollTo = {
        Bottom: () => {
            window.scrollTo({
                top: height,
                behavior: 'smooth'
            })
        },
        Top: () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className={styles.container}>
            {scrollPosition 
            ? <button className={styles.scrollTop} onClick={scrollTo.Top}></button> 
            : <button className={styles.scrollBottom} onClick={scrollTo.Bottom}></button>}
        </div>
    )
}

export default FastScroll