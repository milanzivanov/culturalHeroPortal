function About() {
  return (
    <div className="relative mb-5">
      <div className="mx-auto flex h-full max-w-7xl flex-row-reverse pt-5">
        <div className="relative z-10 flex-[2] rounded-md bg-slate-100 p-5">
          <h1 className="py-5 text-3xl font-bold">Manifest</h1>
          <p className="text-grey-600 text-md mb-5 md:text-lg">
            Vidovi kulturnog herojstva današnjice ogledaju se i na digitalnim
            platformama. Mit(ovi) o Prometeju i(li) o Argonautima nisu, nisu baš
            kako se često čini savremenim istraživačima, daleko od kulturne
            stvarnosti digitalizovanog okruženja u kojem živimo.
          </p>
        </div>
      </div>

      <div className="mx-auto flex h-full max-w-7xl flex-row-reverse pt-5">
        <div className="relative z-10 flex flex-1 flex-col rounded-md bg-slate-100 p-5">
          <div>
            <h1 className="py-5 text-3xl font-bold">Nas fokus</h1>
            <p className="text-grey-600 text-md mb-5 md:text-lg">
              Rukovodeći se mislima jednog od vodećih antropologa 20. veka
              Džozefa Kembela, da je „istina jedna, mudraci o njoj govore
              različitim imenima“, grupa koja (p)okreće ovaj sajt nastoji na
              reafirmiše kulturno i društveno iskustvo pojedinca i kolektiva u
              kojoj, ovaj, živi i stvara.
            </p>
          </div>
          <div>
            <h1 className="py-5 text-3xl font-bold">Nas fokus</h1>
            <p className="text-grey-600 text-md mb-5 md:text-lg">
              Elektronski prostor („prozor“) otvoren je svima onima koji
              razmatraju ulogu Tehnologije u životu Čoveka, baš kao i naporima
              zajednice da u mudrostima „od Veda do Gugla“ sazna Istine ljudskog
              postojanja.
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img src="/images/polica2.jpg" alt="" />
        </div>
      </div>

      <div className="mx-auto flex h-full max-w-7xl pt-5">
        <div className="relative z-10 flex-[2] rounded-md bg-slate-100 p-5">
          <h1 className="py-5 text-3xl font-bold">O nama</h1>
          <p className="text-grey-600 text-md mb-5 md:text-lg">
            Virtuelna prezentacija www.kulturniheroj.org, „otvorena“ temama
            književnih, likovnih i multimedijalnih predstava, biće uspešna
            onoliko koliko uspe da sažme životna, umetnička i tehnološka
            dostignuća današnjice i da ih „poveže“ sa iskustvima prošlih
            vremena.
          </p>
          <p className="text-grey-600 text-md mb-5 md:text-lg">
            Sajt, na osnovu rubrika (Čas anatomije; Knjigohranilište;
            Manuskript; Vizuali; Pomenik; Nova proza; Sakrali, Živa Reč;
            Antropos i Tehnos...) nastoji da (re)afirmiše „vreme prošlo u
            vremenu sadašnjem za vreme buduće“.
          </p>
        </div>
        <div className="flex-[1]">
          <img src="/images/devojkaSaPlocom.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
