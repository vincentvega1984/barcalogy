import { useState, useEffect } from 'react';

import './scroll.scss'

function Scroll() {

    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        let position = window.scrollY
        position > window.innerHeight ? setVisible(true) : setVisible(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    function scrollToTop() {
        window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
    }

    return (
        visible ? <button className="scroll-top fade-in" onClick={scrollToTop}></button> : null
    )
}

export default Scroll;