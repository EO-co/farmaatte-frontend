import Image from "next/image";

export default function Profile() {
  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-54 overflow-hidden">
        <Image
          className="object-cover object-top w-full"
          src="farmaatten/lads.jpg"
          alt="Mountain"
          width={100}
          height={100}
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <Image
          className="object-cover object-center h-32"
          src="/farmaatten/oliver.jpg"
          alt="Woman looking front"
          width={100}
          height={100}
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">diggg-Dude</h2>
        <p className="text-gray-500">Fiedler</p>
      </div>
      <h1 className="text-lg font-bold">Stats</h1>
      <ul className="w-max text-surface dark:text-white">
        <li className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          1v1 stat: 1-1
        </li>
        <li className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          Chancen vundet: 10
        </li>
        <li className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          Svans: ja
        </li>
        <li className="w-full border-b-2 border-neutral-100 py-4 dark:border-white/10">
          Fræk: ork ja
        </li>
      </ul>
    </div>
  );
}
