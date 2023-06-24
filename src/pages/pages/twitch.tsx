import IconsOverlay from "@/components/IconsOverlay"
import About from "@/views/Twitch/About"
import Splash from "@/views/Twitch/Splash"

export default function Twitch() {
  return (
    <>
      <div className="bg-black text-white">
        <Splash />
        <About />
      </div>
      <IconsOverlay />
    </>
  )
}
