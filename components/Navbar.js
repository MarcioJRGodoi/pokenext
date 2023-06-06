import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/pokebola.png"
          width={30}
          height={30}
          alt="Pokebola"
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_itens}>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
