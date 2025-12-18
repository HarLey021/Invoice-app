import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <div className="w-full h-18 flex justify-between items-center  bg-header-dark dark:bg-dark fixed z-5 md:h-20">
      <img src="/logo-full.svg" alt="logo" className="w-18 h-18 md:w-20 h-20" />
      <div className="flex items-center">
        <div className="w-18 h-18 flex justify-center items-center md:w-20 md:h-20">
          <button
            onClick={() => setDark(!dark)}
            className="w-5 h-5 bg-[url('/icon-moon.svg')] dark:bg-[url('/icon-sun.svg')] cursor-pointer"
          ></button>
        </div>
        <div className="w-18 h-18 border-l border-[#494E6E] flex justify-center items-center md:w-24 md:h-20">
          <img
            src="/image-avatar.jpg"
            alt="avatar"
            className="w-8 h-8 rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
