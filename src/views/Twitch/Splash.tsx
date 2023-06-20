import { ArrowDownIcon } from "@heroicons/react/24/outline"
import { useEffect, useRef } from "react"

import usePercentageSeen from "@/hooks/usePercentageSeen"
import bleh from "public/images/emotes/bleh.png"
import doge from "public/images/emotes/doge.png"
import giggle from "public/images/emotes/giggle.png"
import kekw from "public/images/emotes/kekw.png"
import peepo from "public/images/emotes/peepohappy.png"
import pog from "public/images/emotes/pog.png"

const EMOTES = [doge, bleh, giggle, kekw, peepo, pog]

const Splash = () => {
  const emoteDiv = useRef<HTMLImageElement>(null)
  const emoteBase = useRef<HTMLImageElement>(null)
  const emoteIdx = useRef(0)

  const lineOne = useRef<HTMLDivElement>(null)
  const lineTwo = useRef<HTMLDivElement>(null)
  const arrowIcon = useRef<SVGSVGElement>(null)

  const { percentageSeen } = usePercentageSeen("line-two")

  useEffect(() => {
    if (lineOne.current && emoteDiv.current) {
      const ebr = emoteDiv.current.getBoundingClientRect()
      const cbr = lineOne.current.getBoundingClientRect()
      const dist = ebr.top + ebr.height / 2 - cbr.top
      lineOne.current.style.transform = `translateY(calc(${dist}px - 50%))`
    }
    setTimeout(() => {
      if (emoteDiv.current && emoteBase.current) {
        const cbr = emoteDiv.current.getBoundingClientRect()
        const ebr = emoteBase.current.getBoundingClientRect()
        emoteDiv.current.style.transform = `translate(${
          ebr.left - cbr.left
        }px, ${ebr.top - cbr.top}px)`
      }
    }, 1250)
    setTimeout(() => {
      if (
        lineOne.current &&
        lineTwo.current &&
        emoteBase.current &&
        emoteDiv.current
      ) {
        lineOne.current.style.transform = "translateY(0%)"
        emoteBase.current.style.visibility = "visible"
        emoteDiv.current.style.display = "none"
      }
    }, 2000)
    setTimeout(() => {
      if (lineOne.current && lineTwo.current && arrowIcon.current) {
        const dbr = document.body.getBoundingClientRect()
        lineOne.current.style.transform = `translateY(calc(-${
          lineOne.current.getBoundingClientRect().bottom - dbr.top
        }px - 100%))`
        lineTwo.current.style.transform = `translateY(-${
          lineTwo.current.getBoundingClientRect().top - dbr.top
        }px)`
        arrowIcon.current.style.visibility = "visible"
      }
    }, 3800)
    const switchBgImg = () => {
      if (
        emoteDiv.current &&
        emoteIdx.current < EMOTES.length &&
        emoteBase.current
      ) {
        const bg = `url("${EMOTES[emoteIdx.current].src}")`
        emoteDiv.current.style.backgroundImage = bg
        emoteBase.current.style.backgroundImage = bg
        emoteIdx.current++
        if (emoteIdx.current < EMOTES.length) {
          setTimeout(switchBgImg, 140)
        }
      }
    }
    switchBgImg()
  }, [])

  return (
    <>
      <div
        id="intro"
        className="flex min-h-[70vh] flex-col justify-center px-20"
      >
        <div
          ref={emoteDiv}
          className="animate-scale-down absolute h-20 w-20 bg-cover bg-center transition-transform duration-300"
          style={{
            top: "calc(50% - 40px)",
            left: "calc(50% - 40px)",
          }}
        />
        <div
          id="line-one"
          ref={lineOne}
          className="flex items-center text-9xl font-normal transition-transform duration-300"
        >
          <h1 className="pb-5">
            <span className="animate-rise animation-delay-[1000ms]">Hey</span>
            &nbsp;
            <span className="animate-rise animation-delay-[1500ms]">
              gamers
            </span>
          </h1>
          <span
            ref={emoteBase}
            className="invisible ml-5 inline-block h-20 w-20 bg-cover bg-center"
          />
        </div>
        <div
          id="line-two"
          className="mt-1 text-9xl font-normal transition-transform duration-300"
          ref={lineTwo}
        >
          <span className="animate-rise animation-delay-[2500ms]">Meet</span>
          &nbsp;
          <span className="animate-rise animation-delay-[2700ms]">the</span>
          <br />
          <h1
            style={{
              opacity:
                percentageSeen > 0.5
                  ? percentageSeen > 0.5
                    ? Math.max(0, 1 - ((percentageSeen - 0.5) / 0.5) * 3)
                    : 1
                  : 1,
            }}
          >
            <span className="animate-rise text-blue-400 animation-delay-[2900ms]">
              new
            </span>
            &nbsp;
            <span className="animate-rise text-blue-400 animation-delay-[3100ms]">
              Jazz
            </span>
            &nbsp;
            <span className="animate-rise text-blue-400 animation-delay-[3300ms]">
              Club
            </span>
          </h1>
          <ArrowDownIcon
            ref={arrowIcon}
            className="invisible mt-12 w-20 animate-bounce text-blue-400"
            style={{
              opacity:
                percentageSeen > 0.45
                  ? percentageSeen > 0.45
                    ? Math.max(0, 1 - ((percentageSeen - 0.45) / 0.45) * 3)
                    : 1
                  : 1,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Splash
