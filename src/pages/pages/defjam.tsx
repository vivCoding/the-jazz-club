import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

import BlobBackground from "@/components/BlobBackground"
import IconsOverlay from "@/components/IconsOverlay"
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
        href=""
        className="animate-border-bottom group relative text-2xl font-semibold text-gray-400 transition duration-500 hover:text-white"
      >
        {label}
        <ArrowRightIcon className="ml-3 mb-1 inline-block h-6 w-6 -translate-x-2 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
        <div className="absolute top-[150%] left-1/2 -z-10 aspect-square w-56 overflow-hidden opacity-0 transition-opacity duration-700 group-hover:z-20 group-hover:opacity-100">
          <div className="flex h-full flex-row">
            <div className="h-full w-full flex-shrink-0 -translate-x-[500%] overflow-hidden transition duration-700 group-hover:translate-x-0">
              <Image
                src={img}
                alt={`image for ${label}`}
                className="h-full w-full flex-shrink-0 scale-[180%] object-cover object-center transition duration-[1250ms] ease-in-out group-hover:scale-125"
              />
            </div>
            <div className="h-full w-full flex-shrink-0 -translate-x-[300%] bg-slate-900 opacity-40 transition duration-700 group-hover:translate-x-0" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default function DefJam() {
  return (
    <>
      <BlobBackground>
        <div className="mx-auto h-screen w-[80%] pt-20">
          <div>
            <h1 className="text-7xl font-bold ">
              <Link
                href="https://www.defjam.com/#/"
                className="animate-border-bottom after:-bottom-1"
              >
                Def Jam
              </Link>
            </h1>
            <h6 className="mt-7 text-xl">
              An American multinational record label
            </h6>
          </div>
          <div className="mt-16">
            <h1 className="text-5xl font-bold">All Artists</h1>
            <div className="mt-7 grid grid-cols-3 items-start">
              <FancyLinkWithImage label="Artist 1" img={person} />
              <FancyLinkWithImage label="Artist 2" img={person2} />
              <FancyLinkWithImage label="Artist 3" img={person3} />
            </div>
          </div>
        </div>
      </BlobBackground>
      <IconsOverlay />
    </>
  )
}
