function getApiGitHub() {
    fetch('https://api.github.com/users/RennanPeron/repos').then(async res => {
        if(!res.ok){
            throw new Error(res.status)
        }

        let repos = []

        var data = await res.json()
        data.map(item => {
            var repository = new Object()
            repository.name = item.name
            repository.url = item.url
            repository.description = item.description
            repository.stars = item.stargazers_count
            repository.forks = item.forks
            repository.date = Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(new Date(item.updated_at))
            repos.push(repository)
        })

        repos.sort(function(a,b) { 
            return a.date - b.date
        })

        console.log(repos);

    }).catch(erro => console.log(erro))
}

getApiGitHub()