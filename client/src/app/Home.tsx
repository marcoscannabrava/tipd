import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }
  return (
    <div className="bg-[#FBF9F4] min-h-screen font-sans">
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Tipd</div>
        <div className="md:flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            How it works{" "}
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Blog
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900"
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
      <section className="mt-32 mx-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 border-2 border-gray-200">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-center">
            Payday your way
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mt-6 text-center">
            Decide how you want to earn, set your own terms and get paid
            directly. All from one place, at your own pace.
          </p>
          <div className="text-center mt-8">
            <a
              href="#"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold inline-block"
            >
              Learn how Tipd works
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;