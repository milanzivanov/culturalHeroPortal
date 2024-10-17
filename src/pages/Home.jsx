import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative flex h-[calc(100dvh-80px)] items-center justify-center bg-[url('/images/fotelja.jpg')] bg-cover bg-right bg-no-repeat md:bg-center">
      <div className="absolute inset-0 bg-slate-700/50 lg:bg-slate-700/40"></div>
      <div className="relative z-10 flex w-full bg-slate-400 bg-opacity-15 px-5 py-10 md:bg-opacity-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col">
          <h1 className="mb-3 text-[1.8rem] font-black uppercase tracking-widest text-stone-200 md:mb-4 md:text-4xl lg:text-5xl xl:text-6xl">
            Kulturni heroj
          </h1>
          <h2 className="w-full text-pretty pb-5 text-[.95rem] leading-5 text-stone-200 md:w-[70%] md:pb-10 md:text-2xl md:leading-8">
            „Istina je jedna, mudraci o njoj govore različitim imenima...“
            <span className="block italic">Džozef Kembel</span>
          </h2>
          <div className="flex items-center">
            <Link
              to="/blogovi"
              className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-[0.9rem] tracking-widest text-stone-200 transition-colors duration-300 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-600 md:text-lg"
            >
              <span className="text-bold mr-3">Duh pokreće tvar</span>
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
