import { useEffect, useRef, useState } from "react"

// thanks https://stackoverflow.com/questions/27462306/css3-animate-elements-if-visible-in-viewport-page-scroll

const useInViewport = (elemId: string, threshold = 0) => {
  const [inView, setInView] = useState(false)

  const inViewport: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true)
      } else {
        setInView(false)
      }
    })
  }

  const iobs = useRef<IntersectionObserver | undefined>()

  useEffect(() => {
    iobs.current = new IntersectionObserver(inViewport, { threshold })
    const elem = document.getElementById(elemId)
    if (elem) {
      iobs.current.observe(elem)
    }
  }, [elemId, threshold])

  return { inView }
}

export default useInViewport
