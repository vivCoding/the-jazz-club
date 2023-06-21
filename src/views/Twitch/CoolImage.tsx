import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import useInViewport from "@/hooks/useInViewport"
import usePercentageSeen from "@/hooks/usePercentageSeen"
import useScrollPosition from "@/hooks/useScrollPosition"
import coolImg from "public/images/cool.png"
import layer0 from "public/images/layers/000.png"
import layer1 from "public/images/layers/001.png"
import layer2 from "public/images/layers/002.png"
import layer3 from "public/images/layers/003.png"
import layer4 from "public/images/layers/004.png"
import layer5 from "public/images/layers/005.png"
import layer6 from "public/images/layers/006.png"
import layer7 from "public/images/layers/007.png"
import layer8 from "public/images/layers/008.png"

const SCALE_START = 0.6
const PARALLAX_START = 0.66
const ZOOM_MULTIPLIER = 2.5
const INITIAL_SPREAD = 40
const SPREAD_STEP = 5
const TRANSLATE_STRENGTH = 75
const INITIAL_TRANSLATE = -50

const CoolImage = () => {
  const { percentageSeen } = usePercentageSeen("cool-img")
  const { yPercentage } = useScrollPosition()
  const [scrollStart, setScrollStart] = useState(-1)

  useEffect(() => {
    if (percentageSeen >= PARALLAX_START && scrollStart === -1) {
      setScrollStart(yPercentage)
    } else if (percentageSeen < PARALLAX_START) {
      setScrollStart(-1)
    }
  }, [percentageSeen, yPercentage, scrollStart])

  return (
    <>
      <div
        id="cool-img"
        className="fixed top-0 h-[100vh] w-full overflow-hidden"
      >
        <div
          className="relative h-full w-full origin-center"
          style={{
            transform: `scale(${Math.max(
              0,
              ((percentageSeen - SCALE_START) / (1 - SCALE_START)) *
                ZOOM_MULTIPLIER
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
                        (TRANSLATE_STRENGTH - SPREAD_STEP)
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
                        (TRANSLATE_STRENGTH - SPREAD_STEP * 2)
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
                        (TRANSLATE_STRENGTH - SPREAD_STEP * 3)
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
                percentageSeen < PARALLAX_START
                  ? `${INITIAL_TRANSLATE + INITIAL_SPREAD - SPREAD_STEP * 3}%`
                  : `${
                      INITIAL_TRANSLATE +
                      INITIAL_SPREAD -
                      SPREAD_STEP * 3 -
                      Math.abs(scrollStart - yPercentage) *
                        (TRANSLATE_STRENGTH - SPREAD_STEP * 3)
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
                percentageSeen < PARALLAX_START
                  ? `${INITIAL_TRANSLATE + INITIAL_SPREAD - SPREAD_STEP * 2}%`
                  : `${
                      INITIAL_TRANSLATE +
                      INITIAL_SPREAD -
                      SPREAD_STEP * 2 -
                      Math.abs(scrollStart - yPercentage) *
                        (TRANSLATE_STRENGTH - SPREAD_STEP * 2)
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
                percentageSeen < PARALLAX_START
                  ? `${INITIAL_TRANSLATE + INITIAL_SPREAD - SPREAD_STEP}%`
                  : `${
                      INITIAL_TRANSLATE +
                      INITIAL_SPREAD -
                      SPREAD_STEP -
                      Math.abs(scrollStart - yPercentage) *
                        (TRANSLATE_STRENGTH - SPREAD_STEP)
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
                percentageSeen < PARALLAX_START
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
    </>
  )
}

export default CoolImage
