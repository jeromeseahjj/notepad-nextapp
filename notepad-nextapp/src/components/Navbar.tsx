import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <div className="flex h-14 items-center justify-between border-b border-zinc-200 ml-2">
                <Link href='/' className="flex z-40 font-semibold">
                    <span className="text-purple-600">Note</span>
                    <span className="text-purple-300">pad</span>
                </Link>
            </div>
        </nav>
    )

}

export default Navbar