# TIPO DE DADOS
TIPO DE DADOS

1. Números inteiros (sem pontos decimais):

    tinyint
        Descrição: Armazena números inteiros muito pequenos. Geralmente de -128 a 127 (com sinal) ou de 0 a 255 (sem sinal).
        Exemplo:
            IDADE_MESES TINYINT (para alguém muito jovem, e.g., 6 meses)
            NUM_ESTRELAS TINYINT (para uma avaliação de 1 a 5, e.g., 4)
            ATIVO TINYINT (representando 0 para falso, 1 para verdadeiro)

    smallint
        Descrição: Armazena números inteiros pequenos. Geralmente de -32.768 a 32.767 (com sinal) ou de 0 a 65.535 (sem sinal).
        Exemplo:
            NUM_ALUNOS SMALLINT (para o número de alunos em uma turma, e.g., 30)
            ANO_FABRICACAO SMALLINT (para o ano de fabricação de um produto, e.g., 2023)

    mediumint
        Descrição: Armazena números inteiros de tamanho médio. Geralmente de -8.388.608 a 8.388.607 (com sinal) ou de 0 a 16.777.215 (sem sinal).
        Exemplo:
            POPULACAO_CIDADE MEDIUMINT (para uma cidade pequena/média, e.g., 500000)
            TOTAL_VOTOS MEDIUMINT (para o total de votos em uma eleição local, e.g., 1000000)

    int
        Descrição: Armazena números inteiros de tamanho padrão. Geralmente de -2.147.483.648 a 2.147.483.647 (com sinal) ou de 0 a 4.294.967.295 (sem sinal). É um dos tipos mais comuns para IDs.
        Exemplo:
            ID_USUARIO INT (para um identificador único de usuário, e.g., 123456)
            QUANTIDADE_ESTOQUE INT (para o número de itens em estoque, e.g., 1500)
            NUMERO_PEDIDO INT (e.g., 987654321)

    bigint
        Descrição: Armazena números inteiros muito grandes. Utilizado quando int não é suficiente, pois pode armazenar valores muito maiores.
        Exemplo:
            NUM_VISITAS_WEBSITE BIGINT (para o total de visitas em um site popular, e.g., 5000000000)
            ID_TRANSAÇÃO BIGINT (para identificadores de transações financeiras em sistemas de grande volume, e.g., 1234567890123456789)

2. Números com pontos decimais:

    float
        Descrição: Números de ponto flutuante de precisão simples. Útil para valores que não exigem precisão exata, como medições científicas ou gráficos. Pode ter problemas de arredondamento em cálculos financeiros.
        Exemplo:
            TEMPERATURA FLOAT (e.g., 25.5)
            ALTURA_EM_METROS FLOAT (e.g., 1.75)

    double
        Descrição: Números de ponto flutuante de precisão dupla. Oferece maior precisão que float, mas ainda pode ter pequenos erros de arredondamento.
        Exemplo:
            COORDENADA_LATITUDE DOUBLE (e.g., -20.4429)
            COORDENADA_LONGITUDE DOUBLE (e.g., -54.6477)

    decimal(p, s) ou numeric(p, s) (sinônimos em muitos SGBDs)
        Descrição: Armazena números de ponto fixo com precisão e escala exatas (p = precisão total de dígitos, s = número de dígitos após o ponto decimal). Ideal para valores monetários e cálculos financeiros onde a precisão é crucial.
        Exemplo:
            PRECO_PRODUTO DECIMAL(10, 2) (Para armazenar R$ 99.99, pode ter até 10 dígitos no total, sendo 2 após a vírgula)
            SALDO_CONTA DECIMAL(15, 2) (Para um saldo de conta bancária, e.g., 1234567890123.45)
            IMPOSTO_PERCENTUAL DECIMAL(5, 4) (Para 0.0750, 7.5%)

    real
        Descrição: Geralmente é sinônimo de float ou double dependendo do SGBD (em alguns, é sinônimo de float). Armazena números de ponto flutuante.
        Exemplo: (Mesmos de float/double)
            VALOR_ACELERACAO REAL (e.g., 9.81)

3. Data e Hora:

    date
        Descrição: Armazena apenas a data (ano, mês, dia).
        Exemplo:
            DATA_NASCIMENTO DATE (e.g., '1990-05-15')
            DATA_PEDIDO DATE (e.g., '2025-05-22')

    time
        Descrição: Armazena apenas a hora (hora, minuto, segundo).
        Exemplo:
            HORA_INICIO TIME (e.g., '09:00:00')
            DURACAO_FILME TIME (e.g., '01:45:30')

    datetime
        Descrição: Armazena a data e a hora (ano, mês, dia, hora, minuto, segundo). Não armazena informações de fuso horário.
        Exemplo:
            DATA_HORA_REGISTRO DATETIME (e.g., '2025-05-22 16:30:00')
            DATA_AGENDAMENTO DATETIME (e.g., '2025-06-10 14:00:00')

    timestamp
        Descrição: Armazena data e hora. É frequentemente usado para registrar quando uma linha foi criada ou modificada. Muitas vezes é armazenado como o número de segundos desde o "Epoch" (1º de janeiro de 1970 UTC) e pode ser afetado por fusos horários dependendo do SGBD.
        Exemplo:
            ULTIMA_ATUALIZACAO TIMESTAMP (e.g., '2025-05-22 16:37:30') - Automaticamente atualizado em muitos SGBDs quando a linha é modificada.
            CRIADO_EM TIMESTAMP (e.g., '2025-05-22 16:37:30')

4. Caracteres (Strings de Texto):

    char(n)
        Descrição: Armazena uma string de tamanho fixo de n caracteres. Se a string armazenada for menor que n, ela será preenchida com espaços em branco até atingir n. É mais eficiente para dados de tamanho muito consistente.
        Exemplo:
            SIGLA_ESTADO CHAR(2) (e.g., 'MS', 'SP')
            SEXO CHAR(1) (e.g., 'M', 'F')
            CODIGO_PRODUTO CHAR(5) (e.g., 'ABC12')

    varchar(n)
        Descrição: Armazena uma string de tamanho variável, com um tamanho máximo de n caracteres. Ocupa apenas o espaço necessário para a string mais 1 ou 2 bytes para armazenar seu comprimento. Mais flexível e econômico para dados de tamanho variável.
        Exemplo:
            NOME_CLIENTE VARCHAR(100) (e.g., 'Maria da Silva')
            ENDERECO VARCHAR(255) (e.g., 'Rua das Flores, 123 - Centro')
            DESCRICAO_CURTA VARCHAR(500) (e.g., 'Um breve resumo do produto.')

5. Outros Tipos (Variam bastante entre SGBDs):

    bit
        Descrição: Armazena um valor de bit único (0 ou 1). Pode ser usado para flags booleanas ou pequenas coleções de bits.
        Exemplo:
            STATUS_LIGADO BIT (e.g., 0 ou 1)
            PERMISSAO_ACESSO BIT(8) (para um conjunto de 8 flags de permissão, e.g., b'10110010')

    boolean / bool
        Descrição: Armazena valores booleanos (verdadeiro/falso). Em muitos SGBDs (como MySQL), BOOLEAN é apenas um sinônimo de TINYINT(1), onde 0 é falso e qualquer valor diferente de 0 (normalmente 1) é verdadeiro.
        Exemplo:
            USUARIO_ATIVO BOOLEAN (e.g., TRUE ou FALSE, ou 1 ou 0)
            CONTA_VERIFICADA BOOLEAN (e.g., 1 para sim, 0 para não)

Espero que esses exemplos ajudem a entender melhor cada tipo de dado!