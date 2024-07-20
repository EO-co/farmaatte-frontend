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
    picturePath: "/farmaatten/oliver.jpg"
  }
];

export default function Lads() {
  return (
    <div className="bg-white max-w-2xl mx-auto">
        <h2 className="px-3 py-10 text-2xl font-bold tracking-tight text-gray-900">
          Lads
        </h2>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
            {lads.map(function(lad) {
                return (
                    ProfileListElement(lad.nickname, lad.name, lad.picturePath)
                )
            })}
        </ul>
      </div>
    </div>
  );
}
