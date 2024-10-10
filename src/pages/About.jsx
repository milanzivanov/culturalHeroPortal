import Footer from "../components/Footer";

function About() {
  return (
    <>
      <div className="relative">
        <div className="relative h-[40vh] bg-[url('/images/polica1.jpg')] bg-cover bg-right bg-no-repeat">
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-start">
            <h1 className="text-pretty p-5 text-2xl font-extrabold tracking-wide text-slate-200 lg:text-5xl">
              <span className="mb-0 block md:mb-2">Manifest </span>
              <span className="block">kulturnog heroja</span>
            </h1>
          </div>
          <div className="absolute inset-0 bg-slate-700 bg-opacity-50 lg:bg-opacity-45"></div>
        </div>
        <div className="mx-auto flex h-full max-w-7xl flex-col">
          <div className="relative z-10 rounded-md p-5">
            <h2 className="py-5 text-2xl font-bold text-gray-700 md:text-3xl">
              O nama
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
            <p className="text-grey-600 text-md mb-5 md:text-lg">
              Virtuelna prezentacija{" "}
              <a
                className="font-semibold text-gray-700 underline"
                href="http://www.kulturniheroj.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.kulturniheroj.org
              </a>
              , „otvorena“ temama književnih, likovnih i multimedijalnih
              predstava, biće uspešna onoliko koliko uspe da sažme životna,
              umetnička i tehnološka dostignuća današnjice i da ih „poveže“ sa
              iskustvima prošlih vremena.
            </p>
            <p className="text-grey-600 text-md mb-5 md:text-lg">
              Sajt, na osnovu rubrika (Čas anatomije; Knjigohranilište;
              Manuskript; Vizuali; Pomenik; Nova proza; Sakrali, Živa Reč;
              Antropos i Tehnos...) nastoji da (re)afirmiše „vreme prošlo u
              vremenu sadašnjem za vreme buduće“.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
