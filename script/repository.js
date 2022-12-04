function renderRepos(items) {
    items.forEach((item) => {
        console.log(item)
        document.querySelector("main").innerHTML +=`
        <div class="item">
            <div class="repositoryName">
                <img src="img/folder.svg" alt=""> 
                <p>${item.name}</p>
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
                <p>${item.language}</p>
            </div>
        </div>
        `
    })
}