// Função para inverter nome
function inverterNome(nome) {
    return nome.split('').reverse().join('');
/* Usei o método split(''), que separou o nome em um array de caracteres,
 o reverse() que inverteu os itens do array, e o método join(''), que juntou
 todos elementos do array em uma string e retorna essa string, nesse caso invertida
*/
}

// Variável para armazenar nome do aluno
const nomeAluno = 'Paulo André';

// Variável para armazenar nome invertido
const nomeInvertido = inverterNome(nomeAluno);

// Para visualizar o retorno da função 
console.log(nomeInvertido); 
