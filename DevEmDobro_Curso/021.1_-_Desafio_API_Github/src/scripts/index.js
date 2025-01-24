document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;
    getUserProfile(userName);
})

async function user(userName){
    const reponse = await fetch (`https://api.github.com/users/${userName}`);
    return await reponse.json();
}

function getUserProfile(userName){
    user(userName).then(userData => {
        console.log(userData);

        let userInfo = `<img src="${userData.avatar_url}" alt="Foto do perfil do usuário"/>
                        <div class="data">
                            <h1>${userData.name ?? 'Não possui nome cadastrado 😢'}</h1>
                            <p>${userData.bio ?? 'Não possui bio cadastrada 😢'}</p>
                            <p>${userData.followers !== null ? `🔎 Segue <strong>${userData.followers}</strong> pessoa(s)` : 'Usuário não segue ninguem 😢'}</p>
                            <p>${userData.following !== null ? `🕵️‍♂️ Está seguindo <strong>${userData.following}</strong> pessoa(s)` : 'Não esta seguindo ninguem 😢'}</p>
                        </div>`;

        document.querySelector('.profile-data').innerHTML = userInfo;
    })
}