function toggleMenu() {
    const html = document.body;

    html.classList.toggle('light')

    const img = document.queryselector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.pbg')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }
}
