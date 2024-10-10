import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div>
          <h1 className="py-5 text-2xl font-bold md:text-3xl">Kontakt</h1>
          <div className="relative">
            <div className="absolute inset-0 bg-slate-700 bg-opacity-50"></div>
            <img
              src="/images/knjige.jpg"
              alt="kontak fotografija na kontakt stranici"
            />
          </div>
          <p className="text-grey-600 text-md py-5 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            illo porro dignissimos! Corporis nobis dolore voluptates ab.
            Molestiae, delectus? Ipsum quasi ad ratione possimus tempora
            explicabo ducimus deserunt quis provident!
          </p>
          <p className="text-grey-600 text-md pb-5 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            illo porro dignissimos! Corporis nobis dolore voluptates ab.
            Molestiae, delectus? Ipsum quasi ad ratione possimus tempora
            explicabo ducimus deserunt quis provident!
          </p>
          <p className="text-grey-600 text-md pb-5 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            illo porro dignissimos! Corporis nobis dolore voluptates ab.
            Molestiae, delectus? Ipsum quasi ad ratione possimus tempora
            Molestiae, delectus? Ipsum quasi ad ratione possimus tempora
            explicabo ducimus deserunt quis provident!
          </p>
          <p className="text-grey-600 text-md pb-5 md:text-lg">
            kulturniheroj@gmail.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
