import { useQuery } from '@tanstack/react-query'

export const Main = () => {
    const fetchData = async () => {

        const cep = prompt ("Informe o cep sem pontuação ou traço")

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        return await response.json();
    }

    const { data, isLoading, isError, error } = useQuery({ queryKey: "cep", queryFn: fetchData, refetchOnWindowFocus: false });

    console.log(data);

    if (isLoading) return <p>Está carregando as informações...</p>

    if (isError) return <p>Ocorreu um erro desconhecido: {error.message}</p>

    return (
        
        <ul>
            <li>
                <p>{data.logradouro}</p>
                <p>{data.bairro}</p>
                <p>{data.localidade}</p>
                <p>{data.uf}</p>
            </li>
        </ul>
    )
}