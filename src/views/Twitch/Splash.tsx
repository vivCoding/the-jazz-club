import { ArrowDownIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import usePercentageSeen from "@/hooks/usePercentageSeen"
import useScrollPosition from "@/hooks/useScrollPosition"
import bleh from "public/images/emotes/bleh.png"
import doge from "public/images/emotes/doge.png"
import giggle from "public/images/emotes/giggle.png"
import kekw from "public/images/emotes/kekw.png"
import peepo from "public/images/emotes/peepohappy.png"
import pog from "public/images/emotes/pog.png"
import layer0 from "public/images/layers/000.png"
import layer1 from "public/images/layers/001.png"
import layer2 from "public/images/layers/002.png"
import layer3 from "public/images/layers/003.png"
import layer4 from "public/images/layers/004.png"
import layer5 from "public/images/layers/005.png"
import layer6 from "public/images/layers/006.png"
import layer7 from "public/images/layers/007.png"
import layer8 from "public/images/layers/008.png"

const EMOTES = [doge, bleh, giggle, kekw, peepo, pog]
const WORDS_OPACITY_START = 0.1
const WORDS_OPACITY_STRENGTH = 7
const ARROW_OPACITY_START = 0.001
const ARROW_OPACITY_STRENGTH = 7

const SCALE_START = 0.11
const PARALLAX_START = 0.16
const SCALE_MULTIPLIER = 1.5
const MAX_SCALE = 1.6
const INITIAL_SPREAD = 42
const SPREAD_STEP = 5
const TRANSLATE_STRENGTH = 70
const TRANSLATE_STEP = 10
const INITIAL_TRANSLATE = -50

const Splash = () => {
  const emoteDiv = useRef<HTMLImageElement>(null)
  const emoteBase = useRef<HTMLImageElement>(null)
  const emoteIdx = useRef(0)

  const lineOne = useRef<HTMLDivElement>(null)
  const lineTwo = useRef<HTMLDivElement>(null)
  const arrowIcon = useRef<SVGSVGElement>(null)

  const { percentageSeen } = usePercentageSeen("cool-img")

  const { yPercentage, yPos } = useScrollPosition()
  const [scrollStart, setScrollStart] = useState(-1)
  const [scrollEnd, setScrollEnd] = useState(-1)

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

  // useEffect(() => {
  //   console.log("yo", percentageSeen)
  // }, [percentageSeen])

  useEffect(() => {
    if (percentageSeen >= PARALLAX_START && scrollStart === -1) {
      setScrollStart(yPercentage)
    } else if (percentageSeen < PARALLAX_START) {
      setScrollStart(-1)
    }
    if (percentageSeen === 1 && scrollEnd === -1) {
      setScrollEnd(yPercentage)
    }
    console.log("yo", percentageSeen)
  }, [percentageSeen, yPercentage, scrollStart, scrollEnd, yPos])

  return (
    <div className="h-[200vh] overflow-hidden">
      <div
        id="intro"
        className="relative flex h-[100vh] flex-col justify-center px-20"
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
            <span className="animate-rise-word animation-delay-[1000ms]">
              Hey
            </span>
            &nbsp;
            <span className="animate-rise-word animation-delay-[1500ms]">
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
          <span className="animate-rise-word animation-delay-[2500ms]">
            Meet
          </span>
          &nbsp;
          <span className="animate-rise-word animation-delay-[2700ms]">
            the
          </span>
          <br />
          <h1
            style={{
              opacity:
                percentageSeen > WORDS_OPACITY_START
                  ? Math.max(
                      0,
                      1 -
                        ((percentageSeen - WORDS_OPACITY_START) /
                          (1 - WORDS_OPACITY_START)) *
                          WORDS_OPACITY_STRENGTH
                    )
                  : 1,
            }}
          >
            <span className="animate-rise-word text-blue-400 animation-delay-[2900ms]">
              new
            </span>
            &nbsp;
            <span className="animate-rise-word text-blue-400 animation-delay-[3100ms]">
              Jazz
            </span>
            &nbsp;
            <span className="animate-rise-word text-blue-400 animation-delay-[3300ms]">
              Club
            </span>
          </h1>
          <ArrowDownIcon
            ref={arrowIcon}
            className="invisible mt-12 w-20 animate-bounce text-blue-400"
            style={{
              opacity:
                percentageSeen > ARROW_OPACITY_START
                  ? Math.max(
                      0,
                      1 -
                        ((percentageSeen - ARROW_OPACITY_START) /
                          (1 - ARROW_OPACITY_START)) *
                          ARROW_OPACITY_STRENGTH
                    )
                  : 1,
            }}
          />
        </div>
      </div>
      <div
        id="cool-img"
        // className={`${
        //   percentageSeen < 1 ? "fixed top-1/2 -translate-y-1/2" : "absolute"
        // } h-[100vh] w-full overflow-hidden`}
        className="relative mb-[100vh] w-full border-2 border-white"
      >
        <div
          // className="fixed relative origin-center"
          className={`${
            percentageSeen < 1 ? "fixed top-1/2" : "absolute top-0 h-screen"
          } w-full`}
          style={{
            transform: `translateY(${
              percentageSeen < 1
                ? "-50%"
                : `calc(50vh + ${Math.abs(scrollEnd - yPos) * 0}px)`
            })`,
          }}
        >
          <div
            className="relative"
            style={{
              transform: `scale(${Math.max(
                0,
                ((percentageSeen - SCALE_START) / (1 - SCALE_START)) *
                  SCALE_MULTIPLIER
              )})`,
              opacity: Math.max(
                0,
                ((percentageSeen - SCALE_START) / (1 - SCALE_START)) * 5
              ),
            }}
          >
            <Image
              src={layer8}
              alt="layer"
              className="absolute top-1/2 w-full"
              style={{
                transform: `translateY(${
                  percentageSeen < PARALLAX_START
                    ? `${INITIAL_TRANSLATE - INITIAL_SPREAD}%`
                    : `${
                        INITIAL_TRANSLATE -
                        INITIAL_SPREAD +
                        Math.abs(scrollStart - yPercentage) * TRANSLATE_STRENGTH
                      }%`
                })`,
              }}
            />
            <Image
              src={layer7}
              alt="layer"
              className="absolute top-1/2 w-full"
              style={{
                transform: `translateY(${
                  percentageSeen < PARALLAX_START
                    ? `${INITIAL_TRANSLATE - INITIAL_SPREAD + SPREAD_STEP}%`
                    : `${
                        INITIAL_TRANSLATE -
                        INITIAL_SPREAD +
                        SPREAD_STEP +
                        Math.abs(scrollStart - yPercentage) *
                          (TRANSLATE_STRENGTH * 0.9)
                      }%`
                })`,
              }}
            />
            <Image
              src={layer6}
              alt="layer"
              className="absolute top-1/2 w-full"
              style={{
                transform: `translateY(${
                  percentageSeen < PARALLAX_START
                    ? `${INITIAL_TRANSLATE - INITIAL_SPREAD + SPREAD_STEP * 2}%`
                    : `${
                        INITIAL_TRANSLATE -
                        INITIAL_SPREAD +
                        SPREAD_STEP * 2 +
                        Math.abs(scrollStart - yPercentage) *
                          (TRANSLATE_STRENGTH * 0.75)
                      }%`
                })`,
              }}
            />
            <Image
              src={layer5}
              alt="layer"
              className="absolute top-1/2 w-full"
              style={{
                transform: `translateY(${
                  percentageSeen < PARALLAX_START
                    ? `${INITIAL_TRANSLATE - INITIAL_SPREAD + SPREAD_STEP * 3}%`
                    : `${
                        INITIAL_TRANSLATE -
                        INITIAL_SPREAD +
                        SPREAD_STEP * 3 +
                        Math.abs(scrollStart - yPercentage) *
                          (TRANSLATE_STRENGTH - TRANSLATE_STEP * 0.6)
                      }%`
                })`,
              }}
            />
            <Image
              src={layer4}
              alt="layer"
              className="absolute top-1/2 w-full"
              style={{
                transform: `translateY(${INITIAL_TRANSLATE}%)`,
              }}
            />
            <Image
              src={layer3}
              alt="layer"
              className="absolute top-1/2 w-full"
              style={{
                transform: `translateY(${
                  percentageSeen === 1
                    ? `${
                        INITIAL_TRANSLATE +
                        INITIAL_SPREAD -
                        SPREAD_STEP * 3 -
                        Math.abs(scrollStart - scrollEnd) *
                          (TRANSLATE_STRENGTH * 0.6)
                      }%`
                    : percentageSeen < PARALLAX_START
                    ? `${INITIAL_TRANSLATE + INITIAL_SPREAD - SPREAD_STEP * 3}%`
                    : `${
                        INITIAL_TRANSLATE +
                        INITIAL_SPREAD -
                        SPREAD_STEP * 3 -
                        Math.abs(scrollStart - yPercentage) *
                          (TRANSLATE_STRENGTH * 0.6)
                      }%`
                })`,
              }}
            />
            <Image
              src={layer2}
              alt="layer"
              className="absolute top-1/2 w-full"
              style={{
                transform: `translateY(${
                  percentageSeen === 1
                    ? `${
                        INITIAL_TRANSLATE +
                        INITIAL_SPREAD -
                        SPREAD_STEP * 2 -
                        Math.abs(scrollStart - scrollEnd) *
                          (TRANSLATE_STRENGTH * 0.75)
                      }%`
                    : percentageSeen < PARALLAX_START
                    ? `${INITIAL_TRANSLATE + INITIAL_SPREAD - SPREAD_STEP * 2}%`
                    : `${
                        INITIAL_TRANSLATE +
                        INITIAL_SPREAD -
                        SPREAD_STEP * 2 -
                        Math.abs(scrollStart - yPercentage) *
                          (TRANSLATE_STRENGTH * 0.75)
                      }%`
                })`,
              }}
            />
            <Image
              src={layer1}
              alt="layer"
              className="absolute top-1/2 w-full"
              style={{
                transform: `translateY(${
                  percentageSeen === 1
                    ? `${
                        INITIAL_TRANSLATE +
                        INITIAL_SPREAD -
                        SPREAD_STEP -
                        Math.abs(scrollStart - scrollEnd) *
                          (TRANSLATE_STRENGTH * 0.9)
                      }%`
                    : percentageSeen < PARALLAX_START
                    ? `${INITIAL_TRANSLATE + INITIAL_SPREAD - SPREAD_STEP}%`
                    : `${
                        INITIAL_TRANSLATE +
                        INITIAL_SPREAD -
                        SPREAD_STEP -
                        Math.abs(scrollStart - yPercentage) *
                          (TRANSLATE_STRENGTH * 0.9)
                      }%`
                })`,
              }}
            />
            <Image
              src={layer0}
              alt="layer"
              className="absolute top-1/2 w-full"
              style={{
                transform: `translateY(${
                  percentageSeen === 1
                    ? `${
                        INITIAL_TRANSLATE +
                        INITIAL_SPREAD -
                        Math.abs(scrollStart - scrollEnd) * TRANSLATE_STRENGTH
                      }%`
                    : percentageSeen < PARALLAX_START
                    ? `${INITIAL_TRANSLATE + INITIAL_SPREAD}%`
                    : `${
                        INITIAL_TRANSLATE +
                        INITIAL_SPREAD -
                        Math.abs(scrollStart - yPercentage) * TRANSLATE_STRENGTH
                      }%`
                })`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Splash
