import "./menuTop.css"
import iconLanguage from "../assets/icons/language.png"
import iconMenu from "../assets/icons/menu.png"
import logo from "../assets/icons/logo.png"
import { Fragment } from "react"

export default function menuTop() {
    return (
        <nav className="topnav">
            <form className="menuLeft p-menuLeft-sm p-menuLeft-md p-menuLeft-lg">
                <div className="d-sm-block d-md-none">
                    <img src={logo} alt="logo" className="" />
                </div>
                <div className="d-none d-md-flex">
                    <input type="text" name="firstname" placeholder="Search" />
                </div>
            </form>
            <form className="menuRight">
                <div className="d-none d-md-block">
                    <img src={iconLanguage} alt="Paris" className="img" />
                    <button className="pro">Sky Pro</button>
                    <button className="login">Login</button>
                </div>
                <div className="menuMini d-md-block d-lg-none">
                    <img src={iconMenu} alt="Paris" className="img" />
                </div>
            </form>
        </nav>
    )
}
