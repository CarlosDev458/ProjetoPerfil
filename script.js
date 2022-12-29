
var email = 'carlosed3578@gmail.com'


fetch('https://api.github.com/users/CarlosDev458')
.then(response => response.json())
.then(response => {
    dados = response 
    nome.innerHTML = (response.name)
        profi.innerHTML = (response.bio)
        img.innerHTML = document. getElementById("img1"). src =`${response.avatar_url}` 
        l1.innerHTML = (response.location) 
        const git = document.querySelector('#ab3').innerHTML = `<a id="ab3" href="https://github.com/CarlosDev458">
        <img src="DD _ Portfolio/github.png" alt="">
        <p id="tx3">Github</p></a> `
        // href =``

        l2.innerHTML = (response.company)
        l3.innerHTML = `<p> ${(response.login)}</p>`
        l4.innerHTML = email
})
      
var nome = document.querySelector('#caixa-1 h1'),
    profi = document.querySelector('#caixa-1 p'),
    img = document.querySelector('#caixa-1 img'),
    l1 = document.querySelector('#tx1'),
    l2 = document.querySelector('#tx2'),
    l3 = document.querySelector('#tx3'),
    l4 = document.querySelector('#tx7')


    fetch('https://api.github.com/users/CarlosDev458/repos')
    .then(response => response.json())
    .then(response => {
        data = response
        const nome = document.querySelector('#a1 p')
        const link = document.querySelector('#a1'). href =`${data[0].html_url}` 
        const desc = document.querySelector('#secdev p')
        const star = document.querySelector('#p1')
        const wath = document.querySelector('#p2')
        const status = document.querySelector('#org2 p')
        nome.innerHTML = (data[0].name)
        desc.innerHTML = (data[0].description)
        star.innerHTML = (data[0].stargazers_count)
        wath.innerHTML = ( data[0].watchers_count)
        status.innerHTML = (data[0].visibility)
          
    })
  

    







    




    


  