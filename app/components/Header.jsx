<<<<<<< HEAD
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Header;
=======
import Image from "next/image";

const Header = () => {
  return (
    <nav className="p-8 m-16">
      <Image
        src={"/logo-no-background.png"}
        width={300}
        height={90}
        alt="food"
      />
    </nav>
  );
};

export default Header;
>>>>>>> origin/main
