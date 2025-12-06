import { useNavigate } from "react-router-dom";
import PaydaySection from "./PaydaySection";
import Footer from "../footer/Footer";
const Home = () => {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }

  return (
    <div className="min-h-screen font-sans">
      <header className="flex justify-between items-center px-15 py-3 max-w-7xl mx-auto">
        <div className="text-5xl font-bold">Tipd</div>
        <div className="md:flex items-center space-x-6">
          <a href="#" className="font-semibold hover:text-gray-900">
            How it works{" "}
          </a>
          <a href="#" className="font-semibold hover:text-gray-900">
            Blog
          </a>
          <a
            href="#"
            className="font-semibold hover:text-gray-900"
            onClick={handleLoginClick}
          >
            Log in
          </a>
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded-full font-semibold"
          >
            Sign up free
          </a>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mt-16 leading-tight">
          Love what you do and make money too
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mt-6">
          Join all types of creators getting tips, memberships and sales from
          their fans!
        </p>
        <a
          href="#"
          className="bg-[#436DFF] text-white px-8 py-4 rounded-full font-semibold inline-block mt-8"
        >
          Get started
        </a>
      </main>
      <section className="my-32 mx-4 text-left pb-20 bg-[#FBF9F4]">
        <PaydaySection/>
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 border-2 border-gray-200 mt-32">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-left">
            The home of creative joy
          </h2>
          <p className="body-1">
            When did churning out content, maximizing metrics and pushing for
            profit become standard?
          </p>
          <p className="body-1">
            At Tipd we don't conform to that kind of 'norm'.
          </p>
          <p className="body-1">
            Whether you're making things and putting them out there or you're
            showing the love for those that do - Tipd exists so that you can
            create, share, connect and support each other on your own terms.
          </p>
          <p className="body-1">
            "Together we're building a place where everyone can celebrate the
            joy of being free to explore your passions at your own pace."
          </p>
          <a
            href="#"
            className="bg-black text-white px-8 py-4 rounded-full font-semibold inline-block mt-8"
          >
            Read Tipd's story
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
