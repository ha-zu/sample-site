import { DropIn } from "@/features/base/components/DropIn";
import { FadeIn } from "@/features/base/components/FadeIn";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Menu: string[] = [
  "Home",
  "Vision",
  "News",
  "Service",
  "Member",
  "Coporate",
  "Inquire",
];

const MenuList: { [key: string]: string } = {
  Home: "#top",
  Vision: "#vision",
  News: "#news",
  Service: "#service",
  Member: "#member",
  Coporate: "#corporate",
  Inquire: "#inquire",
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const startY = isOpen ? "-100%" : "0%";
  const endY = isOpen ? "0%" : "-100%";
  return (
    <nav>
      <div className="block md:hidden">
        <AiOutlineMenu size={24} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* PC */}
      <ul className="hidden md:flex flex-row space-x-4">
        {Menu.map((menu, menuIndex) => (
          <FadeIn delay={1 + 0.3 * menuIndex} duration={1} key={menuIndex}>
            <Link href={MenuList[menu]}>
              <li>{menu}</li>
            </Link>
          </FadeIn>
        ))}
      </ul>

      {/* Mobile */}
      {isOpen && (
        <div className="fixed inset-6 text-black">
          <DropIn
            className="bg-white"
            startY={startY}
            endY={endY}
            duration={1.3}
          >
            <div className="relative z-50">
              <div>
                <AiOutlineClose
                  size={24}
                  onClick={() => setIsOpen(!isOpen)}
                  className="absolute top-2 right-2"
                />
              </div>

              <div className="h-screen w-screen flex flex-col justify-center items-center space-y-6">
                {Menu.map((menu, menuIndex) => (
                  <FadeIn
                    delay={0.5 + 0.2 * menuIndex}
                    duration={1}
                    key={menuIndex}
                  >
                    <Link
                      key={menuIndex}
                      href={MenuList[menu]}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {menu}
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </DropIn>
        </div>
      )}
    </nav>
  );
}
