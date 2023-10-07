import { FadeIn } from "@/features/base/components/FadeIn";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const MenuList = [
  "ホーム",
  "ビジョン",
  "ニュース",
  "サービス",
  "メンバー",
  "会社情報",
  "お問合せ",
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="block md:hidden">
        <AiOutlineMenu size={24} onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* PC */}
      <ul className="hidden md:flex flex-row space-x-4">
        {MenuList.map((menu, menuIndex) => (
          <FadeIn delay={1 + 0.3 * menuIndex} duration={1} key={menuIndex}>
            <li>{menu}</li>
          </FadeIn>
        ))}
      </ul>

      {/* Mobile */}
      {isOpen && (
        <div className="fixed inset-6 bg-white text-black">
          <div className="relative">
            <div>
              <AiOutlineClose
                size={24}
                onClick={() => setIsOpen(!isOpen)}
                className="absolute top-2 right-2"
              />
            </div>
            <div className="h-screen w-screen flex flex-col justify-center items-center space-y-6">
              {MenuList.map((menu, menuIndex) => (
                <div key={menuIndex}>
                  <a className="hover:underline" href="">
                    {menu}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
