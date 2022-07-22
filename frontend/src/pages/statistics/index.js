import "./style.css"
import MenuTop from "../../components/menuTop"
import Content from "../../components/content"
import MenuLeft from "../../components/menuLeft"

export default function statistics() {
    return (
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
