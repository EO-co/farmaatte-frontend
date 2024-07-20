"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleReroute = (e: any, path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-white">
      <h2 className="px-3 pt-10 text-2xl font-bold tracking-tight text-gray-900">
        All games
      </h2>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <ul className="bg-white rounded-lg shadow divide-y divide-gray-200 max-w-sm">
          <li
            className="px-6 py-4"
            onClick={(e) => handleReroute(e, "/games/fiftyfifty")}
          >
            <div className="flex justify-between">
              <span className="font-semibold text-lg">1v1</span>
            </div>
            <p className="text-gray-700">50-50 chance. Udfordr en lad</p>
          </li>
          <li
            className="px-6 py-4"
            onClick={(e) => handleReroute(e, "/games/chance")}
          >
            <div className="flex justify-between">
              <span className="font-semibold text-lg">3. 2. 1. SYTTEN</span>
            </div>
            <p className="text-gray-700">
              Chancen. Skal du have en lad til at gøre hvad du har lyst til? No
              problem.
            </p>
          </li>
          <li
            className="px-6 py-4"
            onClick={(e) => handleReroute(e, "/games/dice")}
          >
            <div className="flex justify-between">
              <span className="font-semibold text-lg">Terning</span>
            </div>
            <p className="text-gray-700">Mangler du en hurtig terning?</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
