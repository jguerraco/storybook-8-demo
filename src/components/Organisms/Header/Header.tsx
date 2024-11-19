import Search from "@/components/Molecules/Search/Search";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={Styles["site-header"]}>
      <h1>Logo</h1>
      <Search />
    </header>
  );
};

export default Header;
