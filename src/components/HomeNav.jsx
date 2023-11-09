import MobileMenu from "./MobileMenu";
import CloseIcon from "./Icons/CloseIcon";
import HamburgerIcon from "./Icons/Hamburger";
import Logo from "./Icons/Logo";

function HomeNav(props) {
    return (
        <>
            <nav>
                <nav
                    className={`nav container ${
                        props.showMenu ? "nav--menu" : ""
                    }`}
                >
                    <div className="nav__box">
                        <div className="nav__logo">
                            <Logo isMenuOpen={props.showMenu} />
                            <button
                                className={`hamburger ${
                                    props.showMenu ? "is-active" : ""
                                }`}
                                onClick={() => {
                                    props.setShowMenu(!props.showMenu);
                                }}
                            >
                                {props.showMenu ? (
                                    <CloseIcon />
                                ) : (
                                    <HamburgerIcon />
                                )}
                            </button>
                        </div>
                    </div>
                    <ul className="menu__list">
                        <li className="menu__list--item">
                            <a href="#">FEATURES</a>
                        </li>
                        <li className="menu__list--item">
                            <a href="#">PRICING</a>
                        </li>
                        <li className="menu__list--item">
                            <a href="#">CONTACT</a>
                        </li>
                        <li className="menu__list--item red__button ">
                            <a href="#">LOGIN</a>
                        </li>
                    </ul>
                    <MobileMenu show={props.showMenu} />
                </nav>
            </nav>
        </>
    );
}

export default HomeNav;
