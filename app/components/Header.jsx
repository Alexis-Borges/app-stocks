import Image from "next/image";

const Header = () => {
  return (
    <nav className="p-8 mb-12">
      <Image
        src={"/logo-no-background.png"}
        width={300}
        height={90}
        alt="Title"
        className="m-auto"
      />
    </nav>
  );
};

export default Header;
