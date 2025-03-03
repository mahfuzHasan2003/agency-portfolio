import { Link } from "react-router";
import { Button } from "../ui/button";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Menu } from "lucide-react";
const NavBar = () => {
  return (
    <nav className="inline-flex items-center gap-10 py-2 px-5 border rounded-lg bg-secondary/50 backdrop-blur-sm mt-5 fixed left-1/2 -translate-x-1/2">
      <Link>LOGO</Link>
      <DarkModeSwitch size={20} />
      <div className="lg:hidden">
        <Menu />
      </div>
      <div className="hidden lg:inline-flex gap-5 items-center">
        <Link> Home </Link>
        <Link> About </Link>
        <Link> Contact Us </Link>
        <Link>
          <Button>Book a Call</Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
