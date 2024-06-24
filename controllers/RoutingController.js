const routingOutlet = document.getElementById("Page")

fetch("../pages/Home.html").then(res => res.text()).then(PageHTML => routingOutlet.innerHTML = PageHTML)

export function ChangePage(number) {
    switch (number) {
        case 1:
            fetch("../pages/Home.html").then(res => res.text()).then(PageHTML => routingOutlet.innerHTML = PageHTML)
            break
        case 2:
            fetch("../pages/Archive.html").then(res => res.text()).then(PageHTML => routingOutlet.innerHTML = PageHTML)
            break
        case 3:
            fetch("../pages/FAQ.html").then(res => res.text()).then(PageHTML => routingOutlet.innerHTML = PageHTML)
            break
    }
}