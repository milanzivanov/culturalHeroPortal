import Footer from "../components/Footer";
// import TextExpender from "../components/TextExpender";

function About() {
  return (
    <>
      <div className="relative">
        <div className="relative h-[60vh] bg-[url('/images/polica1.jpg')] bg-cover bg-right bg-no-repeat">
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-start">
            <h1 className="text-pretty p-5 text-2xl font-extrabold tracking-wide text-slate-200 lg:text-5xl">
              <span className="mb-0 block md:mb-2">Manifest </span>
              <span className="block">kulturnog heroja</span>
            </h1>
          </div>
          <div className="absolute inset-0 bg-slate-700 bg-opacity-50 lg:bg-opacity-45"></div>
        </div>

        <div className="mx-auto flex h-full max-w-7xl flex-col">
          <div className="relative z-10">
            <h2 className="px-5 pb-8 pt-14 text-xl font-bold uppercase leading-6 tracking-wide text-gray-700 md:px-0 md:text-2xl">
              Kulturno-herojsku posadu čine
            </h2>

            <div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* 1 */}
                <div className="mb-0 flex flex-col items-start rounded-none bg-slate-100 p-5 shadow-md md:rounded-md">
                  <div className="mb-7 flex items-center space-x-5">
                    <img
                      className="w-16 rounded-full bg-[#e9e9e9] shadow-md grayscale backdrop-grayscale-0 md:w-32"
                      src="https://fcyrimjuwctjvvoijrqi.supabase.co/storage/v1/object/sign/cultural-hero-images/avatars/aeksandarAhab2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdWx0dXJhbC1oZXJvLWltYWdlcy9hdmF0YXJzL2Fla3NhbmRhckFoYWIyLndlYnAiLCJpYXQiOjE3MjkxMTY1NjYsImV4cCI6MTg4Njc5NjU2Nn0.CA5OaFjxUDMh_Ej9vdNQAsHowHNLoDOKr2oN3CcUV60&t=2024-10-16T22%3A09%3A25.448Z"
                      alt="a. radovic"
                    />

                    <div>
                      <h3 className="text-lg font-semibold italic text-gray-700 md:text-xl">
                        Aleksandar Radović
                      </h3>
                      <h4 className="text-xs font-semibold text-gray-500 md:text-base">
                        Urednik tekstova
                      </h4>
                    </div>
                  </div>
                  <div>
                    <p className="text-grey-700 word-wrap mb-5 text-sm">
                      Viši diplomirani bibliotekar. Diplomirao na Filozofskom
                      fakultetu u Novom Sadu, Odsek Srpska književnost i jezik
                      (2000) stekavši zvanje profesor srpske književnosti i
                      jezika.
                    </p>

                    <p className="text-grey-700 text-md word-wrap mb-5">
                      U stručnoj periodici piše tekstove i prikaze knjiga iz
                      bibliotečko-informacione delatnosti. Zvanje diplomirani
                      bibliotekar-informatičar-master stiče jula 2010.
                      odbranivši rad Biblioteka Matice srpske (1826-1859) na
                      Filološkom fakultetu Univerziteta u Beogradu.
                    </p>

                    <p className="font-semibold text-gray-700">
                      araddovic@gmail.com
                    </p>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex flex-col items-start rounded-md bg-slate-100 p-5 shadow-md">
                  <div className="mb-7 flex items-center space-x-5">
                    <img
                      className="w-16 rounded-full grayscale backdrop-grayscale-0 md:w-32"
                      src="https://fcyrimjuwctjvvoijrqi.supabase.co/storage/v1/object/sign/cultural-hero-images/avatars/mickoVelicanstveni.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjdWx0dXJhbC1oZXJvLWltYWdlcy9hdmF0YXJzL21pY2tvVmVsaWNhbnN0dmVuaS53ZWJwIiwiaWF0IjoxNzI5MTAxNzI5LCJleHAiOjE4ODY3ODE3Mjl9.GzJkTz4DAYHj4agN1fzhpcFD4fvveDQbqT6hntJ1NIc&t=2024-10-16T18%3A02%3A09.069Z"
                      alt="m. zivanov"
                    />

                    <div>
                      <h3 className="text-lg font-semibold italic text-gray-900 md:text-xl">
                        Milan Živanov
                      </h3>
                      <h4 className="text-xs font-semibold text-gray-500 md:text-base">
                        Tehnička služba sajta
                      </h4>
                    </div>
                  </div>
                  <div>
                    <p className="text-grey-700 text-sp word-wrap mb-5">
                      Strukovni inženjer grafičkog inženjerstva sa primesama
                      dizajna. Diplomirao na Visokoj tehičkoj školi strukovnih
                      studija u Novom Sadu.
                    </p>

                    <p className="text-grey-700 word-wrap mb-5 text-sm">
                      U slobodno vreme razvija sajtove poput Kulturnog heroja i
                      uči tehnologije iz IT svere koje ga zanimaju...
                    </p>

                    <a
                      className="font-semibold text-gray-700"
                      href="https://milanzivanov.com"
                      target="_blank"
                    >
                      www.milanzivanov.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-10 flex h-full max-w-7xl flex-col">
          <div className="relative z-10 px-5 pb-7 md:px-0 md:pb-16">
            <h2 className="pb-8 pt-14 text-xl font-bold uppercase leading-6 tracking-wide text-gray-700 md:text-2xl">
              Naš fokus
            </h2>
            <p className="text-grey-600 text-md mb-5 md:text-lg">
              Vidovi kulturnog herojstva današnjice ogledaju se i na digitalnim
              platformama. Mit(ovi) o Prometeju i(li) o Argonautima nisu, nisu
              baš kako se često čini savremenim istraživačima, daleko od
              kulturne stvarnosti digitalizovanog okruženja u kojem živimo.
            </p>
            <p className="text-grey-600 text-md mb-5 md:text-lg">
              Rukovodeći se mislima jednog od vodećih antropologa 20. veka
              Džozefa Kembela, da je „istina jedna, mudraci o njoj govore
              različitim imenima“, grupa koja (p)okreće ovaj sajt nastoji na
              reafirmiše kulturno i društveno iskustvo pojedinca i kolektiva u
              kojoj, ovaj, živi i stvara.
            </p>
            <p className="text-grey-600 text-md mb-5 md:text-lg">
              Elektronski prostor („prozor“) otvoren je svima onima koji
              razmatraju ulogu Tehnologije u životu Čoveka, baš kao i naporima
              zajednice da u mudrostima „od Veda do Gugla“ sazna Istine ljudskog
              postojanja.
            </p>
            <p className="text-grey-600 text-md md:text-lg">
              Sajt, na osnovu rubrika{" "}
              <span className="font-semibold italic text-gray-700">
                (Čas anatomije; Knjigohranilište; Manuskript; Vizuali; Pomenik;
                Nova proza; Sakrali i Živa Reč...)
              </span>
              nastoji da (re)afirmiše „vreme prošlo u vremenu sadašnjem za vreme
              buduće“.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
