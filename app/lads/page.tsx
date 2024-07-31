"use client";
import { useEffect, useState } from "react";
import ProfileListElement from "../components/profileListElement";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

interface dto {
  id: number;
  name: string;
  nickname: string;
  picture: string;
}

interface cookie {
  token: string;
  expires: number;
  id: number;
}

export default function Lads() {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState<dto[]>();
  const router = useRouter();
  const cookie = Cookies.get("currentUser");

  const fetchProfileData = () => {
    if (!cookie) {
      console.log("could not find cookie");
      router.push("/login");
    } else {
      let jwt: cookie = JSON.parse(cookie);
      console.log("Cookie: " + jwt);
      if (Date.now() > jwt.expires) {
        Cookies.remove("currentUser");
        router.push("/login");
      }
      setLoading(true);
      fetch("https://farmaatte.duckdns.org:2100/api/v1/lads/all/" + jwt.id, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + jwt.token,
        },
      })
        .then((response) => {
          if (!response.ok) throw new Error(response.status.toString());
          else return response.json();
        })
        .then((data) => {
          setLoading(false);
          setProfiles(data);
        })
        .catch((error) => {
          if (error.message === "401") {
            Cookies.remove("currentUser");
            router.push("/login");
          }
        });
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

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
          {profiles &&
            profiles.map((lad: dto, index: number) => {
              return (
                <ProfileListElement
                  key={index}
                  nickname={lad.nickname}
                  name={lad.name}
                  picture={lad.picture}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}
