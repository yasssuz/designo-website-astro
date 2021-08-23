import { useState, useEffect } from "react";
import "./index.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log(menuOpen);
  }, [menuOpen]);

  return (
    <header className='header'>
      <a className='header__logo' href='/'>
        <img src='/assets/logo.svg' alt='Designo' />
      </a>
      <button
        className={`header__toggler ${menuOpen && "active"}`}
        onClick={() => setMenuOpen(prevState => !prevState)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`header__navigation ${menuOpen && "active"}`}>
        {["about", "locations", "contact"].map(item => (
          <a key={item} href={`./${item}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
