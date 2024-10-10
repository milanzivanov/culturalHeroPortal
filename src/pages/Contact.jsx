import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <div className="relative">
        <div className="relative h-[50vh] bg-[url('/images/knjige.jpg')] bg-cover bg-right bg-no-repeat">
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-start">
            <h1 className="text-pretty p-5 text-3xl font-extrabold tracking-wide text-slate-200 lg:text-5xl">
              <span className="mb-0 block md:mb-2">Kontaktiraj </span>
              <span className="block">kulturnog heroja</span>
            </h1>
          </div>
          <div className="absolute inset-0 bg-slate-700 bg-opacity-50 lg:bg-opacity-45"></div>
        </div>
        <div className="mx-auto flex h-full max-w-7xl flex-col">
          <div className="relative z-10 rounded-md p-5">
            <p className="text-grey-600 text-md mb-5 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus illo porro dignissimos! Corporis nobis dolore
              voluptates ab. Molestiae, delectus? Ipsum quasi ad ratione
              possimus tempora explicabo ducimus deserunt quis provident! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              obcaecati recusandae suscipit voluptate quia laboriosam, modi
              corporis vel rerum repellendus aperiam, ipsum deleniti adipisci
              cumque odio velit consectetur natus tempora.
            </p>
            <p className="text-grey-600 text-md mb-5 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus illo porro dignissimos! Corporis nobis dolore
              voluptates ab. Molestiae, delectus? Ipsum quasi ad ratione
              possimus tempora explicabo ducimus deserunt quis provident!
            </p>
            <p className="text-grey-600 text-md mb-5 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus illo porro dignissimos! Corporis nobis dolore
              voluptates ab. Molestiae, delectus? Ipsum quasi ad ratione
              possimus tempora explicabo ducimus deserunt quis provident!
            </p>

            <p className="text-grey-600 text-md pb-5 md:text-lg">
              kulturniheroj@gmail.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
