import NavBar from "./components/nav/Navbar";
import CreateNewEntry from "./components/entries/CreateNewEntry";
import ShowAllEntries from "./components/entries/ShowAllEntries";
import Entry from "./components/entries/Entry";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar />
      <main>
        <div className="flex ">
          <div
            className=" w-2/5
          border-2"
          >
            <CreateNewEntry />
          </div>
          <div
            className=" w-3/5
          border-2"
          >
            <ShowAllEntries />
            <Entry />
          </div>
        </div>
      </main>
    </div>
  );
}
