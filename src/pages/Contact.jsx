function Contact() {
  return (
    <>
      <div className="relative">
        <div className="bg-slate-700/50 lg:bg-slate-700/30"></div>
        <div className="relative h-[calc(100vh-80px)] bg-[url('/images/knjige.jpg')] bg-cover bg-right bg-no-repeat">
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-start">
            <div className="flex overflow-hidden rounded-md bg-gray-700/20">
              <img
                className="hidden w-1/6 grayscale backdrop-grayscale-0 md:flex"
                src="https://fcyrimjuwctjvvoijrqi.supabase.co/storage/v1/object/sign/cultural-hero-images/avatars/avatar1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdWx0dXJhbC1oZXJvLWltYWdlcy9hdmF0YXJzL2F2YXRhcjEuanBnIiwiaWF0IjoxNzI5MTAyNjkzLCJleHAiOjE4ODY3ODI2OTN9.TZvElmBptCdTG6QJ0JqKomDC0pgxCBQbpkebO9Zo_TY&t=2024-10-16T18%3A18%3A12.820Z"
                alt="conection"
              />

              <h1 className="space-y-2 text-pretty rounded-none p-5 text-2xl font-extrabold tracking-wide text-slate-200 md:space-y-4 md:rounded-md lg:text-5xl">
                <span className="block">Kontaktiraj </span>
                <span className="block">kulturnog heroja</span>
                <span className="block">kulturniheroj@gmail.com</span>
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
