// components
import MainNavigation from "./components/MainNavigation";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <MainNavigation />
      <main className="bg-slate-100">
        <Home />
      </main>
    </>
  );
}

export default App;
