import BlobBackground from "@/components/BlobBackground"
import FancyLink from "@/components/FancyLink"
import IconsOverlay from "@/components/IconsOverlay"

export default function Home() {
  return (
    <>
      <BlobBackground>
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
            <FancyLink label="Def Jam" href="/pages/defjam" />
            <FancyLink label="Twitch" href="/pages/twitch" />
            <FancyLink label="Boilermake" href="https://bmxi.vercel.app/" />
          </div>
        </div>
      </BlobBackground>
      <IconsOverlay />
    </>
  )
}
