function createBackground() {
    let backgrounds = ["Sneakers", "Netflix Clone"]
    const projects = document.querySelectorAll('.projects')
    projects.forEach((item, key) => {
        if(item.firstElementChild.innerHTML == backgrounds[key]) {
            item.style.background = `linear-gradient(to bottom, rgba(224, 34, 34, 0) 0%, #302F3D  70%), no-repeat center top / cover  url("../img/${backgrounds[key]}.png")`;
        }   
    })

}

createBackground()