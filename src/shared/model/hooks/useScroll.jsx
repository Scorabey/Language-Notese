import { useState, useEffect } from "react";

const useScroll = () => {
    const [scrollPos, setScrollPos] = useState({
        scrollPosX: window.scrollX,
        scrollPosY: window.scrollY
    })

    useEffect(() => {
        function handleScroll() {
            setScrollPos({
                scrollPosX: window.scrollX,
                scrollPosY: window.scrollY
            })
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return scrollPos
}

export default useScroll