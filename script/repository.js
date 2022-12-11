function renderRepos(items) {

    items.forEach((item) => {
        
        let className = 'color'

        if(item.language == "HTML") {
            className = "color orange"
        } else if (item.language == "CSS") {
            className = "color purple"
        } else if (item.language == "JavaScript") {
            className = "color yellow"
        }

        document.querySelector("main").innerHTML +=`
        <div class="item">
            <div class="repositoryName">
                <img src="img/folder.svg" alt=""> 
                <a target="_blank" href="${item.url}">${item.name}</a>
            </div>
            <div class="description">
                <p>${item.description}</p>
            </div>
            <div class="info">
                <div class="info">
                    <img src="img/star.svg" alt="stars"><p> ${item.stars}</p>
                    <img src="img/git-branch.svg" alt="branch">
                    <p>${item.forks}</p>
                </div>
                <div class="languageBox">
                    <span class="${className}"></span>
                    <p class="language">${item.language}</p>
                </div>
            </div>
        </div>
        `
    })

}