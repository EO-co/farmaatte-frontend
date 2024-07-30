import Image from "next/image";

interface ProfileListProps {
  nickname: string;
  name: string;
  picturePath: string;
}

export default function ProfileListElement({
  nickname,
  name,
  picturePath,
}: ProfileListProps) {
  return (
    <li className="px-3 py-4">
      <div className="flex items-center space-x-4 bg-gray-200">
        <div className="flex-shrink-0">
          <Image
            className="w-20 h-20 rounded-full"
            src={picturePath}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-800 truncate text-wrap">
            {nickname}
          </p>
          <p className="text-sm text-gray-700 truncate">
            {name}
          </p>
        </div>
      </div>
    </li>
  );
}
