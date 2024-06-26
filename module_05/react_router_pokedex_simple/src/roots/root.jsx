import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header className="bg-green-200 p-10 text-center text-6xl">
        <h1>Pokemon</h1>
      </header>
      <Outlet />
    </div>
  );
}
