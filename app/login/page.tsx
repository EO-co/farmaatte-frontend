"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

interface loginDTO {
  username: string;
  password: string;
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const router = useRouter();

  const submit = async () => {
    setFailed(false);
    setLoading(true);

    const axiosInstance = axios.create({
      baseURL: "https://farmaatte.duckdns.org:2100/",
    });
    await axiosInstance
      .post("api/v1/login", {
        username: username,
        password: password,
      })
      .then((res: any) => {
        Cookies.set("currentUser", JSON.stringify(res.data));
        router.push("/games");
      })
      .catch((error: any) => {
        console.log(error);
        setLoading(false);
        setFailed(true);
      });
  };
  return (
    <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-100 w-auto"
          src="/lad.png"
          alt="Your Company"
          width={100}
          height={100}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
          Velkommen lads
        </h2>
      </div>
      {!loading ? (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action={submit}>
            {failed && (
              <div>
                <label className="block text-sm font-medium leading-6 text-red-500">
                  Wrong username or password
                </label>
              </div>
            )}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-black dark:text-white"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-black dark:text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary-shade-75 border-gray-200 dark:bg-gray-900 dark:border-gray-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h1>Loading</h1>
        </div>
      )}
    </div>
  );
}
