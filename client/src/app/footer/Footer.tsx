import { AboutTipd, Features, HelpSupport, UseTipdWith } from "./data";
import { Footerh3 } from "./Footerh3";
import FooterLi from "./FooterLi";

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
            <Footerh3 label="Features"/>
            <ul>
              {Features.map((item) => (
                <FooterLi label={item} />
              ))}
            </ul>
          </div>
          <div>
            <Footerh3 label="Use Tipd with"/>
            <ul>
              {UseTipdWith.map((item) => (
                <FooterLi label={item} />
              ))}
            </ul>
          </div>
          <div>
            <Footerh3 label="Help & Support"/>
            <ul>
              {HelpSupport.map((item) => (
                <FooterLi label={item} />
              ))}
            </ul>
          </div>
          <div>
            <Footerh3 label="About Tipd"/>
            <ul>
              {AboutTipd.map((item) => (
                <FooterLi label={item} />
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
