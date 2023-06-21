import { ArrowDownIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

import useInViewport from "@/hooks/useInViewport"

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex min-h-screen w-[80%] flex-col justify-center space-y-20 px-20 pb-10 text-7xl font-normal"
      >
        {/* TODO add rise to every single word */}
        <div>We created the Jazz Club with one single purpose:</div>
        <div>
          To feature the jazziest and snazziest lookin&apos; websites out there,
          and lorem ipsum more propaganda.
        </div>
        <div
          id="about-p3"
          className="text-blue-400 transition duration-300 hover:text-white"
        >
          <Link href="">
            Click Here for Nothing{" "}
            <ArrowDownIcon className="inline-block w-16 align-baseline" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
