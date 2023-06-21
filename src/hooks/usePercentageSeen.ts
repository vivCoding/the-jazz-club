import { useEffect, useState } from "react"

// https://stackoverflow.com/questions/20223243/js-get-percentage-of-an-element-in-viewport

const usePercentageSeen = (elemId: string) => {
  const [percentageSeen, setPercentage] = useState(0)

  const getPercentageSeen = () => {
    // TODO figure out how to get elem once
    const elem = document.getElementById(elemId)
    if (!elem) return
    // Get the relevant measurements and positions
    const viewportHeight = window.innerHeight
    const scrollTop = window.scrollY
    const elementOffsetTop = elem.offsetTop
    const elementHeight = elem.offsetHeight

    // Calculate percentage of the element that's been seen
    const distance = scrollTop + viewportHeight - elementOffsetTop
    const percentage = distance / ((viewportHeight + elementHeight) / 100)

    // Restrict the range to between 0 and 100
    setPercentage(Math.min(100, Math.max(0, percentage)) / 100)
  }

  const handleScroll = () => {
    getPercentageSeen()
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elemId])

  return { percentageSeen }
}

export default usePercentageSeen
