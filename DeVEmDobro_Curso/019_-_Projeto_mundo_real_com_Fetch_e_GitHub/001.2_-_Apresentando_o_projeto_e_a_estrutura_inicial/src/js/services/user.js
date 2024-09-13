import { baseUrl } from '../variables.js';

export { user };

async function user(userName){
    const reponse = await fetch(`${baseUrl}/${userName}`);
    return await reponse.json();
}