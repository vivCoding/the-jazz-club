import { HomeIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"

import ghLogoWhite from "public/images/github-mark-white.svg"
import ghLogo from "public/images/github-mark.svg"

const IconsOverlay = ({ darkMode = true }) => {
  return (
    <div className="fixed bottom-0 right-0 z-[99] m-10 flex flex-row items-center space-x-4">
      <Link href="/" title="Back to Home">
        <HomeIcon className="popupHover w-10 text-white hover:opacity-40" />
      </Link>
      <Link
        href="https://github.com/vivCoding/the-jazz-club"
        title="View on GitHub"
      >
        <Image
          src={darkMode ? ghLogoWhite : ghLogo}
          alt="GitHub Logo"
          className="popupHover w-8 hover:opacity-40"
        />
      </Link>
    </div>
  )
}

export default IconsOverlay
