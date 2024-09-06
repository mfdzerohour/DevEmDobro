document.getElementById('btn-search').addEventListener('click', () => {
    const username = document.getElementById('input-search').value;
    getUserProfile(username);
});

async function user(userName){
    const reponse = await fetch(`https://api.github.com/users/${userName}`);
    return await reponse.json();
}

// console.log(await user());

function getUserProfile(userName){
    user(userName).then(userData => {
        console.log(userData);
        //avatar_url
        //url
        //bio

        let userInfo =  `<img src="${userData.avatar_url}" alt="foto do perfil do usuário"/> 
                        <div class="data"
                            <h1>${userData.name ?? 'Não possui nome cadastrado 😢'}</h1>
                            <p>${userData.bio ?? 'Não possui bio cadastrada 😢'}</p>
                        </div>`;
        
                        document.querySelector('.profile-data').innerHTML = userInfo
    });
}

