import Image from "next/image";

export default function TopNavbar(title: string, backpath: string) {
  return (
    <nav className="bg-gray-700 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href={backpath}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/lad-face.png"
            className="h-8"
            alt="Flowbite Logo"
            width={100}
            height={60}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-200">
            {title}
          </span>
        </a>
      </div>
    </nav>
  );
}
