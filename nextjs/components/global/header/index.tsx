import styles from "./styles.module.scss";
import Link from "next/link";
import { Anchor } from "@mantine/core";

const Header: React.FC = () => {
  return (
    <div
      className={`${styles.header} font-sans text-orange bg-white w-screen px-4 items-center`}
    >
      <a href="/" className="text-3xl flex items-center">
        Cal Dead
      </a>
      <div className={`${styles.header__links} font-bold`}>
        <Anchor
          color={"orange"}
          href="https://discord.gg/FswagXhdZy"
          target="_blank"
        >
          Discord
        </Anchor>
        &nbsp; &nbsp; &nbsp;
        <Anchor color={"orange"} href="/blog">
          Blog
        </Anchor>
        &nbsp; &nbsp; &nbsp;
        <Anchor color={"orange"} href="/about">
          About
        </Anchor>
      </div>
    </div>
  );
};

export default Header;
