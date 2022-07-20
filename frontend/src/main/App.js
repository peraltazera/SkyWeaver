import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Fragment } from "react"
import MenuTop from "../components/menuTop"
import Content from "../components/content"
import MenuLeft from "../components/menuLeft"
import Footer from "../components/footer"
import Grid from "../components/grid"
// import MenuTop from "../componentsBoot/menuTopBoot"
// import Content from "../componentsBoot/contentBoot"
// import MenuLeft from "../componentsBoot/menuLeftBoot"
// import Footer from "../componentsBoot/footerBoot"

export default function App() {
    return (
        // <Fragment>
        //     <MenuTop />
        //     <MenuLeft />
        //     <Content />
        //     <Footer />
        // </Fragment>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 p-0">
                    <MenuTop />
                    <Content />
                </div>
                <div class="p-0 d-none d-lg-block">
                    <MenuLeft />
                </div>
            </div>
        </div>
    )
}
