function getApiGitHub() {
    fetch('https://api.github.com/users/RennanPeron/repos').then(async res => {

        console.log("Teste")

        if(!res.ok){
            throw new Error(res.status)
        }

        var data = await res.json()
        data.map(item => {
            var repos = new Object()
            repos.name = item.name
            repos.url = item.url
            repos.description = item.description
            repos.stars = item.stargazers_count
            repos.forks = item.forks
            renderRepos(repos.name, repos.description, repos.stars, repos.forks)
        })
        

    }).catch(erro => console.log(erro))
}

getApiGitHub()