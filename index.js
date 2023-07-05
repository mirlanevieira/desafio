// Função para inverter nome
function inverterNome(nome) {
    return nome.split('').reverse().join('');
}

// Variável para armazenar nome do aluno
const nomeAluno = 'Paulo André';

// Variável para armazenar nome invertido
const nomeInvertido = inverterNome(nomeAluno);

// Para visualizar o retorno da função 
console.log(nomeInvertido); 
