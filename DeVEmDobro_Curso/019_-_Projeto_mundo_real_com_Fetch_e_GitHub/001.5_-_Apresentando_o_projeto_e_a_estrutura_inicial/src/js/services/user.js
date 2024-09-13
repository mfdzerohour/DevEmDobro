import { baseUrl } from '../variables.js';

export { getUser };

async function getUser(userName){
    const reponse = await fetch(`${baseUrl}/${userName}`);
    return await reponse.json();
}