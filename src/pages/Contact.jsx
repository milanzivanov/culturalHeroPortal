import logoImage from "/images/kh-logo.svg";

function Contact() {
  return (
    <>
      <div className="relative">
        <div className="bg-slate-700/50 lg:bg-slate-700/30"></div>
        <div className="relative h-[calc(100vh-80px)] bg-[url('/images/knjige.jpg')] bg-cover bg-right bg-no-repeat">
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-start">
            <div className="flex overflow-hidden rounded-md bg-gray-700/20 p-2">
              <img
                className="hidden w-1/3 grayscale backdrop-grayscale-0 md:flex"
                src={logoImage}
                alt="conection"
              />

              <h1 className="flex flex-col justify-center space-y-2 text-pretty rounded-none p-5 font-extrabold tracking-wide text-slate-200 md:space-y-4 md:rounded-md">
                <span className="block text-xl md:text-2xl">Kontaktiraj </span>
                <span className="block text-2xl md:text-3xl">
                  kulturnog heroja
                </span>
                <span className="block text-2xl md:text-4xl">
                  kulturniheroj@gmail.com
                </span>
              </h1>
            </div>
          </div>

          {/* backdrop bg */}
          <div className="absolute inset-0 bg-slate-700 bg-opacity-50 lg:bg-opacity-45"></div>
        </div>
      </div>
    </>
  );
}

export default Contact;
