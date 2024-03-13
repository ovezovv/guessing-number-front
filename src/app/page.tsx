"use client";

import Chat from "@/components/Chat";
import GameResult from "@/components/GameResult";
import Header from "@/components/Header"
import LineChart from "@/components/LineChart";
import Rankings from "@/components/Rankings"
import SideBar from "@/components/SideBar";
import { RecoilRoot } from "recoil";

export default function Home() {
  const data = {
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
      {
        label: '',
        data: [10, 20, 30, 81, 56, 55, 120],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };
  return (
    <RecoilRoot>
      <main className="flex min-h-screen flex-col items-center p-24 bg-dark">
        <div className="flex flex-row w-full">
          <SideBar />
          <div className="gap-2 w-4/6">
            <Header />
            <div className="bg-secondary w-full border border-gray-700 shadow-lg p-4 rounded-lg flex flex-row mt-4 h-80">
            <LineChart data={data} />
            <div className="w-full flex justify-center"><h2 className="text-4xl m-auto font-bold font-mono">9.7x</h2></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full mt-4">
          <Rankings />
          <Chat />
        </div>
      </main>
    </RecoilRoot>
  );
}
