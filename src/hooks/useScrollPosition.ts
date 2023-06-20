import { useEffect, useState } from "react"

// https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript

const useScrollPosition = () => {
  const [yPos, setYPos] = useState(0)
  const [yPercentage, setYPercentage] = useState(0)

  const handleScroll = () => {
    setYPos(window.scrollY)
    setYPercentage(
      document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)
    )
  }

  useEffect(() => {
    setYPos(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { yPos, yPercentage }
}

export default useScrollPosition
