function renderRepos(name, description, stars, forks) {
    document.querySelector("main").innerHTML +=`
    <div class="item">
        <div class="repositoryName">
            <img src="img/folder.svg" alt=""> 
            <p>${name}</p>
        </div>
        <div class="description">
            <p>${description}</p>
        </div>
        <div class="info">
            <div class="info">
                <img src="img/star.svg" alt="stars"><p> ${stars}</p>
                <img src="img/git-branch.svg" alt="branch">
                <p>${forks}</p>
            </div>
            <p>Linguagem</p>
        </div>
    </div>
    `
}