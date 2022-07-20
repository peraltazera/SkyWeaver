import "./menuLeft.css"
import cards from "../assets/icons/cards.png"
import gear from "../assets/icons/gear.png"
import logo from "../assets/icons/logo.png"
import home from "../assets/icons/home.png"
import trophy from "../assets/icons/trophy.png"
import graphPurple from "../assets/icons/graphPurple.png"
import { Fragment, Component } from "react"

export default function menuLeft() {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse fixed-top">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Orders
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Customers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Reports
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Integrations
                        </a>
                    </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                    <span>Saved reports</span>
                    <a className="link-secondary" href="#" aria-label="Add a new report"></a>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Current month
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Last quarter
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Social engagement
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Year-end sale
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
