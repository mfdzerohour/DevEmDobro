import { baseUrl, repositoriesQuantity } from '/src/js/variables.js';

export { repositories };

async function repositories(userName){
    const reponse = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`);
    return await reponse.json();
}