import { baseUrl } from '/src/js/variables.js';

export { user };

async function user(userName){
    const reponse = await fetch(`${baseUrl}/${userName}`);
    return await reponse.json();
}