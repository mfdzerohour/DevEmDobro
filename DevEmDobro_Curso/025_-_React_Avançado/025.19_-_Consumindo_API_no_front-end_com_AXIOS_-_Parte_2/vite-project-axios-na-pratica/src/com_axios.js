import axios from 'axios';
export async function fetchUserDetails(element, username) {
    try {
        // const response = await fetch(`https://api.github.com/users/${username}`)
        const response = await axios.get(`https://api.github.com/users/${username}`)
        //No axios não precisa desta parte comentada 
        // ******* INICIA AQUI o que ele não precisa ********
        // if (!response.ok) {
        //     throw new Error(`GitHub API returned status code ${response.status}`);
        // }

        // const user = await response.json()

        // ******* TERMINA AQUI o que ele não precisa ********

        // console.log(response)
        const user = response.data;
        //Toda a parte comentada acima foi substituida pela linha *** const user = response.data; ***

        element.innerHTML = `
                                <img src="${user.avatar_url}" alt="${user.name}" />
                                <h1>${user.name ? user.name : "No name"}</h1>
                                <p>${user.bio ? user.bio : "No bio"}</p>
        `

    } catch (error) {
        console.error(`Error fetching GitHub user: ${error.message}`);
        element.innerHTML = `<p>Error loading user data</p>`
    }
}