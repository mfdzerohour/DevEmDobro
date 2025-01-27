//Adiciona o evento click ao botão
document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    getUserProfile(userName);
})


//Adiciona o evento keyup ao input
document.getElementById('input-search').addEventListener('keypress', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if(isEnterKeyPressed){
        getUserProfile(userName);
    }
})

//Busca dados do usuário
async function user(userName){
    const reponse = await fetch (`https://api.github.com/users/${userName}`);
    return await reponse.json();
}

//Busca repositorios do usuário
async function repos(userName){
    const reponse = await fetch (`https://api.github.com/users/${userName}/repos?per_page=10`);
    return await reponse.json();
}

function getUserProfile(userName){
    repos(userName).then(repoData => {
        console.log(repoData);
    })

    user(userName).then(userData => {
        console.log(userData);

        let userInfo = `<div class="info">
                            <img src="${userData.avatar_url}" alt="Foto do perfil do usuário"/>
                            <div class="data">
                                <h1>${userData.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                <p>${userData.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                <p>${userData.followers !== null ? `🔎 Segue <strong>${userData.followers}</strong> pessoa(s)` : 'Usuário não segue ninguem 😢'}</p>
                                <p>${userData.following !== null ? `🕵️‍♂️ Está seguindo <strong>${userData.following}</strong> pessoa(s)` : 'Não esta seguindo ninguem 😢'}</p>
                            </div>
                        </div>`;

        document.querySelector('.profile-data').innerHTML = userInfo;
        getUserRepositories(userName);
    })
}

function getUserRepositories(userName){
    repos(userName).then(reposData => {
        let repositoriesItens = "";
        console.log(reposData);

        reposData.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        })
        document.querySelector('.profile-data').innerHTML += `  
                                                                <div class="repositories section">
                                                                    <h2>Repositórios:</h2>
                                                                    <ul>${repositoriesItens}</ul>
                                                                </div>`;

    })
}