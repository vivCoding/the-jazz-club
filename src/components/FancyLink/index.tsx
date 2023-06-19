import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

const FancyLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <div>
      <Link
        href={href}
        className="animate-border-bottom group relative text-2xl font-semibold text-gray-400 transition duration-500 hover:text-white"
      >
        {label}
        <ArrowRightIcon className="ml-3 mb-1 inline-block h-6 w-6 -translate-x-2 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
      </Link>
    </div>
  )
}

export default FancyLink
