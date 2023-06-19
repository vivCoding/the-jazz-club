import { ArrowDownIcon } from "@heroicons/react/24/outline"
import { useEffect, useRef, useState } from "react"

import IconsOverlay from "@/components/IconsOverlay"

export default function Twitch() {
  const lineOne = useRef<HTMLDivElement>(null)
  const lineTwo = useRef<HTMLDivElement>(null)
  const arrowIcon = useRef<SVGSVGElement>(null)

  useEffect(() => {
    setTimeout(() => {
      if (lineOne.current && lineTwo.current) {
        lineOne.current.setAttribute("style", "transform: translateY(0%);")
        // lineOne.current.style.transform = "translateY(0%)"
      }
    }, 1700)
    setTimeout(() => {
      if (lineOne.current && lineTwo.current && arrowIcon.current) {
        lineOne.current.setAttribute(
          "style",
          `transform: translateY(calc(-${
            lineOne.current.getBoundingClientRect().bottom -
            document.body.getBoundingClientRect().top
          }px - 100%));`
        )
        lineTwo.current.setAttribute(
          "style",
          `transform: translateY(-${
            lineTwo.current.getBoundingClientRect().top -
            document.body.getBoundingClientRect().top
          }px);`
        )
        arrowIcon.current.style.visibility = "visible"
      }
    }, 3500)
  }, [])

  return (
    <>
      <div className="bg-black text-white">
        <div
          id="intro"
          className="flex min-h-screen flex-col justify-center px-20"
        >
          <div className="">
            <div
              id="line-one"
              ref={lineOne}
              className="translate-y-full text-9xl font-normal transition-transform duration-300"
            >
              <span className="animate-rise animation-delay-[700ms]">Hey</span>
              &nbsp;
              <span className="animate-rise animation-delay-[1200ms]">
                gamers
              </span>
            </div>
            <div
              id="line-two"
              className="mt-5 text-9xl font-normal transition-transform duration-300"
              ref={lineTwo}
            >
              <span className="animate-rise animation-delay-[2200ms]">
                Meet
              </span>
              &nbsp;
              <span className="animate-rise animation-delay-[2400ms]">the</span>
              <br />
              <span className="animate-rise text-blue-400 animation-delay-[2600ms]">
                new
              </span>
              &nbsp;
              <span className="animate-rise text-blue-400 animation-delay-[2800ms]">
                Jazz
              </span>
              &nbsp;
              <span className="animate-rise text-blue-400 animation-delay-[3000ms]">
                Club
              </span>
              <ArrowDownIcon
                ref={arrowIcon}
                className="invisible mt-12 w-32 animate-bounce text-blue-400"
              />
            </div>
          </div>
        </div>
      </div>
      <IconsOverlay />
    </>
  )
}
