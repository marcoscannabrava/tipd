import {data} from "./data";

const Footer = () => {
  return (
    <footer className="bg-blue-200  text-gray-800">
      <div className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Make money doing what you love
          </h2>

          <div className="max-w-max mx-auto flex items-center bg-white rounded-full overflow-hidden p-1">
            <input
              type="text"
              placeholder="tipd.co/MyPage"
              className="grow px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button className="bg-black text-white rounded-full px-6 py-2 ml-2">
              Claim
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 rounded-2xl bg-white py-8 px-8">
          <div>
            <h3 className="font-bold mb-2">Features</h3>
            <ul>
              {data.Features.map((item, id) => (
                <li>
                  <a href="#" className="hover:underline" key={id}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Use Tipd with</h3>
            <ul>
              {data.UseTipdWith.map((item, id) => (
                <li>
                  <a href="#" className="hover:underline" key={id}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Help & Support</h3>
            <ul>
              {data.HelpSupport.map((item, id) => (
                <li>
                  <a href="#" className="hover:underline" key={id}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">About Tipd</h3>
            <ul>
              {data.AboutTipd.map((item, id) => (
                <li>
                  <a href="#" className="hover:underline" key={id}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-2">
          <p>Tipd Labs ©2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
