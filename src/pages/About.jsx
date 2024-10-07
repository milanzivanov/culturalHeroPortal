function About() {
  return (
    <div className="relative h-[calc(100vh-80px)] bg-[url('/images/polica1.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-slate-700 bg-opacity-50 lg:bg-opacity-30"></div>
      <div className="mx-auto max-w-7xl p-5">
        <div className="relative z-10 rounded-sm bg-white p-5">
          <h1 className="py-5 text-3xl font-bold">O nama</h1>
          <p className="text-grey-600 text-md mb-5 md:text-lg">
            Veliki pesnici ne javljaju se u epohama u kojima prevladava
            refleksija, već u onima koje su bogate imaginacijama, u epohama koje
            se nazivaju barbarskim, kao što se Homer pojavio u barbarstvu
            antike, Dante u srednjovekovnom ponovo oživljenom talijanskom
            barbarstvu
          </p>
          <span className="font-bold">Benedeto Kroče</span>
        </div>
      </div>
    </div>
  );
}

export default About;
