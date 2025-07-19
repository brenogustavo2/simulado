const questions = [
    {
        q: '1. Qual comando é usado para remover completamente uma tabela do banco de dados?',
        options: ['a) DELETE', 'b) DROP', 'c) REMOVE', 'd) CLEAR'],
        answer: 1
    },
    {
        q: '2. Qual tipo de comando SQL é usado para inserir dados em uma tabela?',
        options: ['a) DCL', 'b) DDL', 'c) DML', 'd) DQL'],
        answer: 2
    },
    {
        q: '3. Uma chave primária:',
        options: ['a) Permite valores nulos', 'b) Pode ter valores duplicados', 'c) Identifica de forma única os registros', 'd) Só pode ser usada em tabelas temporárias'],
        answer: 2
    },
    {
        q: '4. O que significa SGBD?',
        options: ['a) Sistema de Gerenciamento de Banco de Dados', 'b) Sistema Geral de Banco Digital', 'c) Software de Geração de Banco Dinâmico', 'd) Serviço Geral de Backup de Dados'],
        answer: 0
    },
    {
        q: '5. O comando ALTER TABLE serve para:',
        options: ['a) Adicionar novos dados', 'b) Excluir registros', 'c) Modificar a estrutura da tabela', 'd) Criar um novo banco de dados'],
        answer: 2
    },
    {
        q: '6. A cláusula WHERE é usada para:',
        options: ['a) Ordenar dados', 'b) Filtrar registros com base em uma condição', 'c) Juntar tabelas', 'd) Contar registros'],
        answer: 1
    },
    {
        q: '7. Qual comando apaga todos os registros de uma tabela sem remover sua estrutura?',
        options: ['a) TRUNCATE', 'b) DELETE', 'c) REMOVE', 'd) DROP'],
        answer: 0
    },
    {
        q: '8. A chave estrangeira:',
        options: ['a) Sempre é obrigatória', 'b) É usada para criar índices', 'c) Estabelece um relacionamento entre tabelas', 'd) Substitui a chave primária'],
        answer: 2
    },
    {
        q: '9. Em qual linguagem o SQL se enquadra?',
        options: ['a) Linguagem de Programação', 'b) Linguagem de Definição de Estilo', 'c) Linguagem de Consulta Estruturada', 'd) Linguagem de Marcação'],
        answer: 2
    },
    {
        q: '10. Um campo que não pode ser nulo deve ser definido como:',
        options: ['a) DEFAULT', 'b) AUTO_INCREMENT', 'c) NOT NULL', 'd) UNIQUE'],
        answer: 2
    },
    {
        q: '11. Qual comando SQL é usado para remover todos os registros de uma tabela mantendo sua estrutura?',
        options: ['A) DELETE', 'B) DROP', 'C) TRUNCATE', 'D) REMOVE'],
        answer: 2
    },
    {
        q: '12. Qual linguagem define a estrutura do banco de dados?',
        options: ['A) DML', 'B) DDL', 'C) SQL', 'D) TCL'],
        answer: 1
    },
    {
        q: '13. Qual comando insere dados em uma tabela?',
        options: ['A) INSERT', 'B) UPDATE', 'C) SELECT', 'D) DELETE'],
        answer: 0
    },
    {
        q: '14. Em um MER, o que representa a cardinalidade 1:N?',
        options: ['A) Um para um', 'B) Muitos para um', 'C) Um para muitos', 'D) Muitos para muitos'],
        answer: 2
    },
    {
        q: '15. O que faz o comando SELECT * FROM funcionarios;?',
        options: ['A) Mostra só os nomes', 'B) Mostra só os salários', 'C) Mostra todos os dados', 'D) Apaga a tabela'],
        answer: 2
    },
    {
        q: '16. Qual comando apaga permanentemente a estrutura de uma tabela?',
        options: ['A) DELETE', 'B) TRUNCATE', 'C) DROP', 'D) ERASE'],
        answer: 2
    },
    {
        q: '17. O que é uma chave primária?',
        options: ['A) Coluna que permite valores repetidos', 'B) Coluna que identifica registros unicamente', 'C) Uma função SQL', 'D) Uma junção de tabelas'],
        answer: 1
    },
    {
        q: '18. Qual é o objetivo da integridade referencial?',
        options: ['A) Acelerar buscas', 'B) Evitar SQL Injection', 'C) Garantir consistência entre tabelas', 'D) Aumentar a performance'],
        answer: 2
    },
    {
        q: '19. O que DML significa?',
        options: ['A) Linguagem de Marcação de Dados', 'B) Linguagem de Manipulação de Dados', 'C) Linguagem de Modelagem de Dados', 'D) Linguagem de Múltiplas Linhas'],
        answer: 1
    },
    {
        q: '20. Qual comando atualiza dados em uma tabela?',
        options: ['A) INSERT', 'B) DELETE', 'C) UPDATE', 'D) ALTER'],
        answer: 2
    }
];

function renderQuestions() {
    const form = document.getElementById('quizForm');
    questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'question';
        div.innerHTML = `<div class="question-title">${q.q}</div>` +
            q.options.map((opt, j) =>
                `<div class="options"><label><input type="radio" name="q${i}" value="${j}"> ${opt}</label></div>`
            ).join('');
        form.appendChild(div);
    });
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Ver Resultado';
    btn.onclick = checkAnswers;
    form.appendChild(btn);
}

function checkAnswers() {
    let correct = 0;
    questions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && Number(selected.value) === q.answer) correct++;
    });
    document.getElementById('result').innerHTML = `Você acertou <b>${correct}</b> de <b>${questions.length}</b> questões!`;
}

renderQuestions();