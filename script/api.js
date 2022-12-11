function getApiGitHub() {
    fetch('https://api.github.com/users/RennanPeron/repos').then(async res => {
        if(!res.ok){
            throw new Error(res.status)
        }

        let repos = []

        var data = await res.json()
        data.map(item => {
            var repository = new Object()
            if(item.updated_at)
            repository.name = item.name
            repository.url = item.html_url
            repository.description = item.description
            repository.stars = item.stargazers_count
            repository.forks = item.forks
            repository.language = item.language
            repository.date = Intl.DateTimeFormat("fr-CA", {year: "numeric"}).format(new Date(item.updated_at))
            if(repository.date == "2022"){
                repos.push(repository)
            }
        })

        renderRepos(repos)

    }).catch(erro => console.log(erro))
}

getApiGitHub()