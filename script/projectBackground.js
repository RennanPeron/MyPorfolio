function createBackground() {
    let backgrounds = ["Sneakers", "Netflix Clone"]
    const projects = document.querySelectorAll('.projects')
    projects.forEach((item, key) => {
        if(item.firstElementChild.innerHTML == backgrounds[key]) {
            item.style.background = `linear-gradient(rgba(224, 34, 34, 0) 0%, rgb(48, 47, 61) 70%) 0% 0% / cover, url("../img/${backgrounds[key]}.png") center top no-repeat`;
            item.style.backgroundSize = "cover";
            console.log(item.firstChild.style)
            // item.style = `"background-size: cover; background: "linear-gradient(to bottom, rgba(224, 34, 34, 0) 0%, #302F3D  70%), url("../img/${backgrounds[key]}.png") no-repeat top center"`
        }
    })
}

createBackground()