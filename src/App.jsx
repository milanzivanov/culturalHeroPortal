// components
import MainNavigation from "./components/MainNavigation";

// pages
import Home from "./pages/Home";

import "./App.css";

function App() {
  // {<h2>Blog {import.meta.env.VITE_SUPABASE_URL}</h2>}
  return (
    <>
      <MainNavigation />
      <main className=" bg-slate-100 ">
        <Home />
      </main>
    </>
  );
}

export default App;
