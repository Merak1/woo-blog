"use client";
import NavBar from "./components/nav/Navbar";
import CreateNewEntry from "./components/entries/CreateNewEntry";
import ShowAllEntries from "./components/entries/ShowAllEntries";
import { useWooBlog } from "@/hooks/useWooBlog";

export default function Home() {
  const { entries } = useWooBlog();
  return (
    <>
      {entries && (
        <div className="flex flex-col min-h-screen ">
          <NavBar />
          <main>
            <div className="flex ">
              <div className=" w-2/5 p-2">
                <CreateNewEntry />
              </div>
              <div className=" w-3/5 p-2">
                <ShowAllEntries />
              </div>
            </div>
          </main>
        </div>
      )}
      {!entries && (
        <div className="flex bg-teal-100 items-center text-center justify-center h-screen ">
          <div className="m-auto">
            <p>loading...</p>
            <p>🐳</p>
          </div>
        </div>
      )}
    </>
  );
}
