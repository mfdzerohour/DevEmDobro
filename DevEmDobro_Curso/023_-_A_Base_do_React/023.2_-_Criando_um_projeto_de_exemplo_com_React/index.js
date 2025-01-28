const root = document.getElementById('root');
const p = React.createElement('p', null, 'Olá mundo');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(p);