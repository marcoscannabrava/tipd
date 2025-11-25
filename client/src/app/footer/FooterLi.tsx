interface FooterLiProps {
  label: string;
}

export const FooterLi = ({ label }: FooterLiProps) => {
  return (
    <li>
      <a href="#" className="hover:underline">
        {label}
      </a>
    </li>
  );
};

export default FooterLi;
