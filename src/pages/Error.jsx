import { useRouteError, Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <MainNavigation />
      <div className="mx-auto flex h-[calc(100vh-80px)] max-w-7xl items-center justify-center">
        <div className="flex items-center justify-between rounded-md bg-slate-200 p-5">
          <div className="flex flex-col justify-start">
            <h1 className="mx-auto mb-5 flex text-5xl font-bold">
              Sorry, an unexpected error has occurred.
            </h1>
            <p className="mb-10 text-3xl">
              <i>{error.statusText || error.message}</i>
            </p>
            <div className="flex">
              <Link
                to="/"
                className="flex items-center rounded-md bg-blue-500 px-4 py-2 text-xl tracking-wide text-stone-200 hover:bg-blue-600"
              >
                <span className="mr-3 text-lg">Nazad na glavnu stranicu</span>
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
          <img
            className="w-1/2"
            src="/images/404.svg"
            alt="404 error page not fount"
          />
        </div>
      </div>
    </div>
  );
}

export default Error;
