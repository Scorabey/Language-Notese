import { useState, useEffect } from "react";

const useResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: document.body.scrollWidth,
        height: document.body.scrollHeight
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: document.body.scrollWidth,
                height: document.body.scrollHeight
            })
        }
            handleResize()

            const resizeObserver = new ResizeObserver(() => {
                handleResize()
            })

            resizeObserver.observe(document.body)

            window.addEventListener('resize', handleResize)
            
            return () => {
                resizeObserver.disconnect()
                window.removeEventListener('resize', handleResize)
            }
    }, [])

    return windowSize
}

export default useResize