import IconsOverlay from "@/components/IconsOverlay"
import CoolImage from "@/views/Twitch/CoolImage"
import Splash from "@/views/Twitch/Splash"

export default function Twitch() {
  return (
    <>
      <div className="bg-black text-white">
        <Splash />
        {/* <div className="border-t-2 border-t-white" /> */}
        <CoolImage />
        {/* <div className="h-[100vh] border-t-2 border-t-white" /> */}
        <div className="h-screen" />
      </div>
      <IconsOverlay />
    </>
  )
}
