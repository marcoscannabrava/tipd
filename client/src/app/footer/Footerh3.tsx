interface Footerh3 {
  label: string;
}

export const Footerh3 = ({ label }: Footerh3) => {
  return <h3 className="font-bold mb-2">{label}</h3>;
};

export default Footerh3;
