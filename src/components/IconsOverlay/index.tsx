import Image from "next/image"
import Link from "next/link"

import ghLogoWhite from "public/images/github-mark-white.svg"
import ghLogo from "public/images/github-mark.svg"

const IconsOverlay = ({ darkMode = true }) => {
  return (
    <div className="fixed bottom-0 right-0 z-[99] m-10">
      <Link href="https://github.com/vivCoding/the-jazz-club" title="GitHub">
        <Image
          src={darkMode ? ghLogoWhite : ghLogo}
          alt="GitHub Logo"
          className="popupHover w-10 cursor-pointer hover:opacity-40"
        />
      </Link>
    </div>
  )
}

export default IconsOverlay
