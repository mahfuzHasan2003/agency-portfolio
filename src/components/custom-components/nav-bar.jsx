import { Link } from "react-router";
import { Button } from "../ui/button";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <nav className="inline-flex items-center gap-10 py-1.5 px-5 border rounded-lg bg-secondary/50 backdrop-blur-sm mt-5 fixed left-1/2 -translate-x-1/2">
      {/* Brand Logo */}
      <Link>LOGO</Link>

      {/* Theme switcher */}
      <Tooltip>
        <TooltipTrigger>
          <DarkModeSwitch
            size={20}
            checked={theme === "dark"}
            onChange={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          />
        </TooltipTrigger>
        <TooltipContent>Change theme</TooltipContent>
      </Tooltip>

      {/* Nav Links */}
      <div className="hidden lg:inline-flex gap-5 items-center">
        <Link> Home </Link>
        <Link> About </Link>
        <Link> Contact Us </Link>
        <Link>
          <Button>Book a Call</Button>
        </Link>
      </div>

      {/* Drawer for small devices */}
      <Drawer direction="top" dismissible={false} open={drawerOpen}>
        <DrawerTrigger
          onClick={() => setDrawerOpen(true)}
          className="lg:hidden"
        >
          <Menu />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="inline-flex flex-col gap-3 items-center pb-5">
              <Link>Home</Link>
              <Link>Route1</Link>
              <Link>Route2</Link>
              <Link>Route3</Link>
            </DrawerTitle>
            <DrawerDescription className="absolute left-1/2 -translate-x-1/2 -bottom-4">
              <Button
                variant="destructive"
                size="icon"
                onClick={() => setDrawerOpen(false)}
              >
                <X />
              </Button>
            </DrawerDescription>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default NavBar;
