import { Link } from "react-router-dom";

type NavButtonProps = {
  to: string;
  label: string;
  variant?: "study" | "quiz" | "stats";
};

const NavButton = ({ to, label, variant }: NavButtonProps) => {
  const variantClass = variant ? `nav-button--${variant}` : "";

  return (
    <Link className={`nav-button ${variantClass}`.trim()} to={to}>
      {label}
    </Link>
  );
};

export default NavButton;
