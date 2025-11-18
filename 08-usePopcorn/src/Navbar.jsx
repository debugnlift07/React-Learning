import Logo from "./Logo";
import Numresults from "./Numresults";
import Search from "./Search";

function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        <Search />
        <Numresults />
      </nav>
    </>
  );
}
export default Navbar;
