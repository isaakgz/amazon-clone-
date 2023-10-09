import React, { useEffect, useState } from 'react'
import "./BackToTop.css"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function BackToTop() {
    const [isVisble, setIsVisble] = useState(false);
    // Check if the user has scrolled down enough to show the button

    const handScroll = ()=>{
        if (window.scrollY > 300){
            setIsVisble(true);
        }else setIsVisble(false)
    }

      // Add a scroll event listener

      useEffect(()=>{
        window.addEventListener("scroll", handScroll);
        return ()=>{
            window.removeEventListener("scroll", handScroll)
        }

      },[])

      // Scroll to the top when the button is clicked

      const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
      }
  return (
    <div className={`back-to-top-button ${isVisble ? "visible" : ""}`}
    onClick={scrollToTop}
  >
  < ArrowUpwardIcon />
  </div>
  )
}

export default BackToTop