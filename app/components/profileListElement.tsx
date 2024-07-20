export default function ProfileListElement(nickname: string, name: string, picturePath: string) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="w-20 h-20 rounded-full" src={picturePath} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {nickname}
        </p>
        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
          {name}
        </p>
      </div>
    </div>
  );
}
