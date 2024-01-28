import NavBar from "./components/nav/Navbar";
import CreateNewEntry from "./components/entries/CreateNewEntry";
import ShowAllEntries from "./components/entries/ShowAllEntries";
import { loadProducts } from "./libs/loadProducts";

export default async function Home() {
  const entries: any = await loadProducts();
  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar />
      <main>
        <div className="flex ">
          <div className=" w-2/5 p-2">
            <CreateNewEntry />
          </div>
          <div className=" w-3/5 p-2">
            <ShowAllEntries entries={entries} />
          </div>
        </div>
      </main>
    </div>
  );
}
