//Next
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-[#5DA5A4]">
      <Image
        src="/img/bg-header-desktop.svg"
        alt="Desktop Header Image"
        width={1000}
        height={1000}
        className="w-full"
      />
    </header>
  );
};

export default Header;
