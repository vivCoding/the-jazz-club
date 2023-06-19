import React, { useEffect, useRef } from "react"

const BlobBackground = ({ children }: { children: React.ReactNode }) => {
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
        <div className="relative z-10">{children}</div>
      </div>
    </>
  )
}

export default BlobBackground
