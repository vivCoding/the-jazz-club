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

const SCALE_THRESHOLD = 0.3

const CoolImage = () => {
  const { inView } = useInViewport("cool-img")
  const coolDiv = useRef<HTMLDivElement>(null)
  const { percentageSeen } = usePercentageSeen("cool-img")
  const { yPercentage } = useScrollPosition()
  const [scrollStart, setScrollStart] = useState(-1)

  useEffect(() => {
    if (percentageSeen >= SCALE_THRESHOLD && scrollStart === -1) {
      setScrollStart(yPercentage)
    } else if (percentageSeen < SCALE_THRESHOLD) {
      setScrollStart(-1)
    }
    // console.log("got", percentageSeen, scrollStart, yPercentage)
  }, [percentageSeen, yPercentage, scrollStart])

  return (
    <>
      <div
        id="cool-img"
        className={`${
          inView ? "visible" : "visible"
        } relative mx-5 h-[100vh] -translate-y-1/2 overflow-y-hidden`}
        ref={coolDiv}
        style={{
          transform: `scale(${Math.min(1, percentageSeen * 2.5)})`,
        }}
      >
        {/* TODO figure out how to clip properly */}
        <div className="h-full w-full overflow-y-hidden">
          <Image
            src={layer8}
            alt="layer"
            className="absolute top-1/2 w-full"
            style={{
              transform: `translateY(${
                percentageSeen < SCALE_THRESHOLD
                  ? "-90%"
                  : `-${90 - Math.abs(scrollStart - yPercentage) * 70}%`
              })`,
            }}
          />
          <Image
            src={layer7}
            alt="layer"
            className="absolute top-1/2 w-full"
            style={{
              transform: `translateY(${
                percentageSeen < SCALE_THRESHOLD
                  ? "-85%"
                  : `-${85 - Math.abs(scrollStart - yPercentage) * 65}%`
              })`,
            }}
          />
          <Image
            src={layer6}
            alt="layer"
            className="absolute top-1/2 w-full"
            style={{
              transform: `translateY(${
                percentageSeen < SCALE_THRESHOLD
                  ? "-80%"
                  : `-${80 - Math.abs(scrollStart - yPercentage) * 60}%`
              })`,
            }}
          />
          <Image
            src={layer5}
            alt="layer"
            className="absolute top-1/2 w-full"
            style={{
              transform: `translateY(${
                percentageSeen < SCALE_THRESHOLD
                  ? "-75%"
                  : `-${75 - Math.abs(scrollStart - yPercentage) * 55}%`
              })`,
            }}
          />
          <Image
            src={layer4}
            alt="layer"
            className="absolute top-1/2 w-full"
            style={{
              transform: `translateY(${
                percentageSeen < SCALE_THRESHOLD
                  ? "-50%"
                  : `-${50 - Math.abs(scrollStart - yPercentage) * 0}%`
              })`,
            }}
          />
          <Image
            src={layer3}
            alt="layer"
            className="absolute top-1/2 w-full"
            style={{
              transform: `translateY(${
                percentageSeen < SCALE_THRESHOLD
                  ? "-25%"
                  : `-${25 + Math.abs(scrollStart - yPercentage) * 55}%`
              })`,
            }}
          />
          <Image
            src={layer2}
            alt="layer"
            className="absolute top-1/2 w-full"
            style={{
              transform: `translateY(${
                percentageSeen < SCALE_THRESHOLD
                  ? "-20%"
                  : `-${20 + Math.abs(scrollStart - yPercentage) * 60}%`
              })`,
            }}
          />
          <Image
            src={layer1}
            alt="layer"
            className="absolute top-1/2 w-full"
            style={{
              transform: `translateY(${
                percentageSeen < SCALE_THRESHOLD
                  ? "-15%"
                  : `-${15 + Math.abs(scrollStart - yPercentage) * 65}%`
              })`,
            }}
          />
          <Image
            src={layer0}
            alt="layer"
            className="absolute top-1/2 w-full"
            style={{
              transform: `translateY(${
                percentageSeen < SCALE_THRESHOLD
                  ? "-10%"
                  : `-${10 + Math.abs(scrollStart - yPercentage) * 70}%`
              })`,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default CoolImage
