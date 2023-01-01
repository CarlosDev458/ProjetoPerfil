fetch('https://api.github.com/users/CarlosDev458')
.then(response => response.json())
.then(response => {
    data = response // var data = todos os dados da api

    // BLOCK 1 
    const img_profile = document.querySelector('#block_1_img_1')
    img_profile.innerHTML = document.querySelector('#block_1_img_1').src =`${response.avatar_url}`
    const name_profile  = document.querySelector('#block_1 h1')
    name_profile.innerHTML = (response.name)
    const bio_profile = document.querySelector('#block_1 p') 
    bio_profile.innerHTML = (response.bio)
    

    // BLOCK 2
    
    const company_work = document.querySelector('#info_1')
    company_work.innerHTML = (response.company)
    const location_work = document.querySelector('#info_2')
    location_work.innerHTML = (response.location)
    const profile_github = document.querySelector('#info_3')
    profile_github.innerHTML = (response.login)
    const email_profile = document.querySelector('#info_4')
    email_profile.innerHTML = "carlosed3578@gmail.com"

    // BLOCK 4

    const  data_repos = (response.repos_url)
    const url_repos = data_repos.replace('"',' ')
    

})

 fetch('https://api.github.com/users/CarlosDev458/repos')
.then(response => response.json())
.then(response => {
    repo = response

    const name_repo = document.querySelector('#url_proj p')
    name_repo.innerHTML = (repo[0].name)
    const desc_repo = document.querySelector('#desc_proj p')
    desc_repo.innerHTML = (repo[0].description)
    const star_proj = document.querySelector('#stars')
    star_proj.innerHTML = (repo[0].stargazers_count)
    const forks_proj = document.querySelector('#forks')
    forks_proj.innerHTML = (repo[0].watchers_count)
    const visibility_proj = document.querySelector('#visibility')
    visibility_proj.innerHTML = (repo[0].visibility)
    

})