"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface dto {
  name: string;
  nickname: string;
  profilepicture: string;
}

export default function Profile() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const fetchProfile = () => {};

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="bg-gray-600 h-screen pt-5">
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto shadow-xl rounded-lg bg-gray-200 overflow-auto">
        <div className="rounded-t-lg h-54 overflow-hidden">
          <Image
            className="object-cover object-top w-full"
            src="/farmaatten/lads.jpg"
            alt="Mountain"
            width={100}
            height={100}
          />
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-gray-100 rounded-full overflow-hidden">
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
        <div className="mx-4">
          <h1 className="text-lg font-bold">Stats</h1>
          <ul className="text-surface divide-y divide-gray-600 max-w-sm">
            <li className="w-full py-4">1v1 stat: 1-1</li>
            <li className="w-full py-4">Chancen vundet: 10</li>
            <li className="w-full py-4">Svans: ja</li>
            <li className="w-full py-4">Fræk: ork ja</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
