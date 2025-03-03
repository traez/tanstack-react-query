import Link from "next/link";

export default async function Header() {
  return (
    <nav className="flex flex-col justify-center items-center gap-1 md:flex-row md:justify-between py-1 px-4 border-b-2 border-gray-800 bg-[#b0bbba] text-black w-full max-w-[1440px]">
      <menu className="flex justify-start">
        <Link
          href="/"
          className="flex items-center self-center text-2xl font-semibold whitespace-nowrap  hover:text-blue-900"
        >
          Tanstack React Query
        </Link>
      </menu>
      <aside className="flex justify-center items-center gap-4 md:gap-6">
        <Link
          href="/comments"
          className="text-base font-semibold border-2 border-blue-900 px-4 py-2 rounded-md hover:bg-yellow-300  transition duration-300"
        >
          Comments
        </Link>
        <Link
          href="/formpost"
          className="text-base font-semibold border-2 border-blue-900 px-4 py-2 rounded-md hover:bg-yellow-300  transition duration-300"
        >
          FormPost
        </Link>
      </aside>
    </nav>
  );
}
