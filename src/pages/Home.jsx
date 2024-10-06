import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative flex h-[calc(100vh-80px)] items-center justify-center bg-[url('/images/fotelja.jpg')] bg-cover bg-right md:bg-center">
      <div className="absolute inset-0 bg-slate-700 bg-opacity-50 lg:bg-opacity-30"></div>
      <div className="bg-opacity-150 relative z-10 flex w-full bg-slate-400 bg-opacity-10 px-5 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col">
          <h1 className="mb-5 text-3xl font-extrabold uppercase leading-snug tracking-widest text-stone-200 md:mb-10 lg:text-7xl">
            Kulturni heroj
          </h1>
          <div className="flex items-center">
            <Link
              to="/blogovi"
              className="flex items-center rounded-sm bg-blue-500 px-4 py-2 text-xl tracking-wide text-stone-200 transition-colors duration-300 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-600"
            >
              <span className="text-semibold mr-3">Duh pokreće tvar</span>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
