import ProfileListElement from "../components/profileListElement";

interface lad {
  nickname: string;
  name: string;
  picturePath: string;
}

const lads: lad[] = [
  {
    nickname: "bejeweled",
    name: "Daniel",
    picturePath: "/farmaatten/daniel.jpg",
  },
  {
    nickname: "Cliffes",
    name: "Frederik",
    picturePath: "/farmaatten/frederik.jpg",
  },
  {
    nickname: "Digdude(founder)",
    name: "Mads",
    picturePath: "/farmaatten/mads.jpg",
  },
  {
    nickname: "Viser-Kurt",
    name: "Nicklas",
    picturePath: "/farmaatten/nicklas.jpg",
  },
  {
    nickname: "Den omvandrende kalender(Morbror Martin)",
    name: "Simon",
    picturePath: "/farmaatten/simon.jpg",
  },
  {
    nickname: "Tobias John Krøyer Duncan-King",
    name: "Tobias",
    picturePath: "/farmaatten/tobias.jpg",
  },
  {
    nickname: "diggg-Dude",
    name: "Oliver",
    picturePath: "/farmaatten/oliver.jpg",
  },
];

export default function Lads() {
  return (
    <div className="bg-gray-600 max-w-2xl mx-auto h-screen">
      <h2 className="px-3 py-6 text-2xl font-bold tracking-tight text-gray-200">
        Lads
      </h2>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-4/6 overflow-auto">
        <ul
          role="list"
          className="bg-gray-200 rounded-lg shadow divide-y divide-gray-600 max-w-sm"
        >
          {lads.map((lad: lad, index: number) => {
            return (
              <ProfileListElement
                key={index}
                nickname={lad.nickname}
                name={lad.name}
                picturePath={lad.picturePath}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
