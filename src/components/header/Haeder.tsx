import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  NavbarItem,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { logos, icons } from "../../assets";
import './Header.css'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Instituciones",
    "Comparativas",
    "Acerca de",
    "Documentacion",
    "Ayuda",
  ];

  return (
    <Navbar className="bg-c-gray-100 flex justify-between px-10" onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-c-blue-black-800"
        />
        <NavbarBrand>
          <img src={logos.DataGovRD} alt="logo" width={200} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden  sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 m-0 flex items-center bg-transparent text-c-blue-black-800 font-bold gap-2 data-[hover=true]:bg-transparent"
                endContent={icons.ArrowDown}
                radius="sm"
              >
                Instituciones
                <img
                  src={icons.ArrowDown}
                  alt=""
                  width={10}
                  className="mt-[.1em]"
                />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
            >
              Example
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link className="text-c-blue-black-800 font-bold text-sm" href="#">
            Comparativas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-c-blue-black-800 font-bold text-sm" href="#">
            Acerca de
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-c-blue-black-800 font-bold text-sm" href="#">
            Documentacion
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-c-blue-black-800 font-bold text-sm" href="#">
            Ayuda
          </Link>
        </NavbarItem>
      </NavbarContent>
      
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-c-blue-black-800 font-semibold" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
