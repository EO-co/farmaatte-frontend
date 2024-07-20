"use client";
import TopNavbar from "@/app/components/topNavbar";
import Dice from "react-dice-roll";

export default function () {
  return (
    <>
      <div>{TopNavbar("Terning", "/games")}</div>
      <div className=" flex items-center justify-center py-10">
        <div className="">
          <Dice size={100} />
        </div>
      </div>
    </>
  );
}
