import {ChangePage} from "./RoutingController";
const navElement = document.getElementById("Navbar")

fetch("../components/navbar.html").then(res => res.text()).then(componentHTML => navElement.innerHTML = componentHTML)

export function Route(number) {
    ChangePage(number)
}