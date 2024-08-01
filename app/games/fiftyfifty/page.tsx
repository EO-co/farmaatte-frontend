"use client";
import ActionButton from "@/app/components/actionbutton";
import TopNavbar from "@/app/components/topNavbar";
import { lads } from "@/app/components/users";
import { setPriority } from "os";
import { use, useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

enum states {
  OnePlayerWaiting,
  TwoPlayerWaiting,
  CountStarted,
  GameFinished,
}

interface lobby {
  id: string;
  maxPlayers: number;
  members: number[];
  status: states;
  memberReadyStates: Map<number, boolean>;
  result: number;
}

export default function FiftyFifty() {
  const [readyState, setReadyState] = useState<boolean>(false);
  const [lobbies, setLobbies] = useState<lobby[]>([]);
  const [inLobby, setInLobby] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentLobby, setCurrentLobby] = useState<lobby>();

  let userid: number;
  const router = useRouter();
  const cookie: string | undefined = Cookies.get("currentUser");
  if (!cookie) {
    router.push("/login");
  } else {
    userid = JSON.parse(cookie).id;
  }
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null
  );

  const updateLobbyStatus = (lobbyStatus: lobby) => {
    setCurrentLobby(lobbyStatus);
  };

  const createLobby = () => {
    if (!connection) {
      console.log("No connection");
    } else {
      connection.invoke("CreateLobby", userid);
      setInLobby(true);
    }
  };

  const joinLobby = (lobbyId: string) => {
    if (!connection) {
      console.log("No connection");
    } else {
      connection.invoke("JoinLobby", lobbyId, userid);
      setInLobby(true);
    }
  };

  const handleReadyClick = () => {
    setReadyState(!readyState);
    console.log("Player is ready: " + readyState);
  };

  useEffect(() => {
    const connect = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:2098/fiftyFiftyHub")
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Information)
      .build();
    setConnection(connect);

    connect
      .start()
      .then(() => {
        connect.on("ReceiveOverview", (lobbyList: lobby[]) => {
          setLoading(true);
          setLobbies(lobbyList);
          setLoading(false);
          console.log(lobbyList);
        });
        connect.on("LobbyFull", (lobbyMsg: string) => {
          console.log(lobbyMsg);
        });
        connect.on("LobbyEmpty", (lobbyMsg: string) => {
          console.log(lobbyMsg);
        });
        connect.on("LobbyStatus", (lobby: lobby) => {
          updateLobbyStatus(lobby);
        });
        connect.invoke("IdentifyUser", userid);
      })
      .catch((err) =>
        console.error("Error while connecting to SignalR Hub:", err)
      );

    return () => {
      if (connection) {
        connection.off("ReceiveOverview");
        connection.off("LobbyFull");
        connection.off("LobbyEmpty");
        connection.off("LobbyStatus");
        connection.off("IdentifyUser");
      }
    };
  }, []);

  useEffect(() => {
    console.log(lobbies);
  }, [lobbies]);

  return (
    <div className="bg-gray-600 h-screen">
      <div>{TopNavbar("Fifty-fifty", "/games")}</div>
      <div>
        {!inLobby && (
          <>
            <div>
              <h1 className="text-2xl font-bold text-gray-200">
                Liste af aktive spil
              </h1>
            </div>
            <div>
              <button
                type="button"
                className="bg-white inline-flex flex-col items-center justify-center px-5  group"
                onClick={(e) => createLobby()}
              >
                Start spil
              </button>
            </div>
            <div>
              {loading ? ( // Conditional rendering based on loading state
                <div>Loading...</div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {lobbies &&
                    lobbies.map((lobby: lobby) => {
                      return (
                        <div
                          key={lobby.id}
                          className="bg-gray-200 rounded-lg shadow divide-y divide-gray-600 max-w-sm"
                          onClick={(e) => joinLobby(lobby.id)}
                        >
                          <li className="px-6 py-4">
                            <div className="flex justify-between">
                              <span className="text-gray-800 font-semibold text-lg">
                                {lobby.id}
                              </span>
                            </div>
                            <p className="text-gray-700">
                              {lobby.members?.length ?? 0} / {lobby.maxPlayers}
                            </p>
                          </li>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </>
        )}
        {
          <>
            {inLobby && (
              <div>
                <h1>{"Gamestates: " + currentLobby?.status}</h1>
                <button
                  type="button"
                  className="bg-white inline-flex flex-col items-center justify-center px-5  group"
                  onClick={(e) => handleReadyClick()}
                  disabled={!(currentLobby?.status === states.TwoPlayerWaiting)}
                >
                  Klar
                </button>
              </div>
            )}
          </>
        }
      </div>
    </div>
  );
}
