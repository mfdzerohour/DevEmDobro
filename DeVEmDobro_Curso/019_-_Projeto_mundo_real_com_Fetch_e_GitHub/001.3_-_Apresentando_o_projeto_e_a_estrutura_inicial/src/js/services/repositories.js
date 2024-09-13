import { baseUrl, repositoriesQuantity } from '../variables.js';

export { getRepositories };

async function getRepositories(userName){
    const reponse = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`);
    return await reponse.json();
}