import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

import person from "public/images/person.jpg"
import person2 from "public/images/person2.jpg"
import person3 from "public/images/person3.jpg"

import type { StaticImageData } from "next/image"

const FancyLinkWithImage = ({
  label,
  img,
}: {
  label: string
  img: StaticImageData
}) => {
  return (
    <div>
      <Link
        href="/"
        className="animate-border-bottom group relative text-2xl font-semibold text-gray-400 transition duration-500 hover:text-white"
      >
        {label}
        <ArrowRightIcon className="ml-3 mb-1 inline-block h-6 w-6 -translate-x-2 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
        <div className="absolute top-[150%] left-1/2 -z-10 aspect-square w-56 overflow-hidden opacity-0 transition-opacity group-hover:z-20 group-hover:opacity-100">
          <div className="flex h-full flex-row">
            <div className="h-full w-full flex-shrink-0 -translate-x-[300%] overflow-hidden transition duration-700 group-hover:translate-x-0">
              <Image
                src={img}
                alt={`image for ${label}`}
                className="h-full w-full flex-shrink-0 scale-[180%] object-cover object-center transition duration-[1250ms] ease-in-out group-hover:scale-125"
              />
            </div>
            <div className="h-full w-full flex-shrink-0 -translate-x-[300%] bg-slate-900 opacity-0 transition  duration-500 group-hover:translate-x-0 group-hover:opacity-50" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function Home() {
  const blob = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.onpointermove = (e) => {
      const { clientX, clientY } = e
      if (blob.current) {
        blob.current.animate(
          {
            top: `${clientY - blob.current.clientHeight / 2}px`,
            left: `${clientX - blob.current.clientWidth / 2}px`,
          },
          { duration: 5000, fill: "forwards" }
        )
      }
    }
  }, [])

  return (
    <>
      <div
        id="blob"
        ref={blob}
        className="animate-slow-spin fixed z-0 aspect-square h-[60vh] rounded-full bg-gradient-to-r from-blue-300 to-blue-900 opacity-60"
      />
      <div
        id="blur-fg"
        className="fixed z-[1] h-full w-full backdrop-blur-[400px]"
      />
      <div className="bg-black text-white">
        <div className="relative z-10">
          <div className="flex h-screen items-center justify-center">
            <div className="z-10 text-center">
              <h1 className="text-7xl font-bold drop-shadow-lg transition duration-1000 hover:scale-105 hover:text-blue-300">
                The Jazz Club
              </h1>
              <h3 className="mt-2 text-2xl">Featuring the jazziest websites</h3>
            </div>
          </div>
          <div className="mx-auto h-screen w-[80%]">
            <h1 className="text-5xl font-bold">All Pages</h1>
            <div className="mt-10 grid grid-cols-3 items-start">
              <FancyLinkWithImage label="Page 1" img={person} />
              <FancyLinkWithImage label="Page 2" img={person2} />
              <FancyLinkWithImage label="Page 3" img={person3} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
