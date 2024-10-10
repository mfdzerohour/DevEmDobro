const root = document.getElementById('root');
const p = React.createElement('p', null, 'Olá, Mundo!');
const reactRoot = ReactDOM.createRoot(root);

// Esta linha se torna desnecessaria a partir da versão 18
// ReactDOM.render(p, root);

//Ficando assim agora
reactRoot.render(p);