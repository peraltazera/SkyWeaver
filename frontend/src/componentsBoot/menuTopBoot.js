import "./menuTop.css"
import iconLanguage from "../assets/icons/language.png"

export default function menuTop() {
    return (
        <header class="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
            <div class="container-fluid d-flex align-items-center">
                <h1 class="d-flex align-items-center fs-4 text-white mb-0">
                    <img src="/docs/5.2/assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="me-3" alt="Bootstrap" />
                    Cheatsheet
                </h1>
                <a href="/docs/5.2/examples/cheatsheet-rtl/" class="ms-auto link-light" hreflang="ar">
                    RTL cheatsheet
                </a>
            </div>
        </header>
    )
}
