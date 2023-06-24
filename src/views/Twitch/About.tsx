import { ArrowDownIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useEffect } from "react"

import usePercentageSeen from "@/hooks/usePercentageSeen"

const FIRST_LINE_TRIGGER = 0.15

const About = () => {
  const { percentageSeen } = usePercentageSeen("about")

  useEffect(() => {
    console.log("got", percentageSeen)
  }, [percentageSeen])

  return (
    <>
      <div
        id="about"
        className="flex min-h-screen w-[80%] flex-col justify-center space-y-20 p-20 pb-10 text-7xl font-normal"
      >
        <div>
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[100ms]"
                : "invisible"
            }
          >
            We
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[150ms]"
                : "invisible"
            }
          >
            created
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[200ms]"
                : "invisible"
            }
          >
            the
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[250ms]"
                : "invisible"
            }
          >
            Jazz
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[300ms]"
                : "invisible"
            }
          >
            Club
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[350ms]"
                : "invisible"
            }
          >
            with
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[400ms]"
                : "invisible"
            }
          >
            one
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[450ms]"
                : "invisible"
            }
          >
            single
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[500ms]"
                : "invisible"
            }
          >
            purpose:
          </span>
        </div>
        <div>
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1000ms]"
                : "invisible"
            }
          >
            To
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1050ms]"
                : "invisible"
            }
          >
            search
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1100ms]"
                : "invisible"
            }
          >
            for
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1150ms]"
                : "invisible"
            }
          >
            the
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1200ms]"
                : "invisible"
            }
          >
            jazziest
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1250ms]"
                : "invisible"
            }
          >
            lookin&apos;
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1300ms]"
                : "invisible"
            }
          >
            websites
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1350ms]"
                : "invisible"
            }
          >
            out
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1400ms]"
                : "invisible"
            }
          >
            there,
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1450ms]"
                : "invisible"
            }
          >
            and
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1500ms]"
                : "invisible"
            }
          >
            to
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1550ms]"
                : "invisible"
            }
          >
            feature
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1600ms]"
                : "invisible"
            }
          >
            them
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1650ms]"
                : "invisible"
            }
          >
            on
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1700ms]"
                : "invisible"
            }
          >
            this
          </span>{" "}
          <span
            className={
              percentageSeen > FIRST_LINE_TRIGGER
                ? "animate-rise-word animation-delay-[1750ms]"
                : "invisible"
            }
          >
            site.
          </span>
        </div>
        <div id="about-p3">
          <Link
            href=""
            className="group text-blue-400 transition duration-300 hover:text-white"
          >
            <span
              className={
                percentageSeen > FIRST_LINE_TRIGGER
                  ? "animate-rise-word animation-delay-[1900ms]"
                  : "invisible"
              }
            >
              Click
            </span>{" "}
            <span
              className={
                percentageSeen > FIRST_LINE_TRIGGER
                  ? "animate-rise-word animation-delay-[1950ms]"
                  : "invisible"
              }
            >
              Here
            </span>{" "}
            <span
              className={
                percentageSeen > FIRST_LINE_TRIGGER
                  ? "animate-rise-word animation-delay-[2000ms]"
                  : "invisible"
              }
            >
              for
            </span>{" "}
            <span
              className={
                percentageSeen > FIRST_LINE_TRIGGER
                  ? "animate-rise-word animation-delay-[2050ms]"
                  : "invisible"
              }
            >
              Nothing
            </span>{" "}
            <ArrowDownIcon
              className={`${
                percentageSeen > FIRST_LINE_TRIGGER
                  ? "opacity-100 delay-[2500ms]"
                  : "opacity-0"
              }  group-hover:animate-arrow-in inline-block w-16 align-baseline transition-opacity ease-in`}
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
