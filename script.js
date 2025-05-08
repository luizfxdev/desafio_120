// Função principal que encontra o número mais frequente
function findMostFrequentNumber(arr) {
    // Cria um objeto para contar a frequência de cada número
    const frequencyMap = {};

    // Preenche o mapa de frequência
    arr.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    let mostFrequentNumber = null;
    let highestFrequency = 0;

    // Encontra o número com a maior frequência
    for (const num in frequencyMap) {
        const frequency = frequencyMap[num];

        // Se a frequência for maior ou, em caso de empate, o número for menor
        if (frequency > highestFrequency ||
            (frequency === highestFrequency && Number(num) < mostFrequentNumber)) {
            mostFrequentNumber = Number(num);
            highestFrequency = frequency;
        }
    }

    return mostFrequentNumber;
}

// Função para converter a string de entrada em um array de números
function parseInput(input) {
    return input.split(',')
        .map(item => item.trim())
        .filter(item => item !== '')
        .map(Number)
        .filter(num => !isNaN(num));
}

// Função para lidar com o clique no botão DESVENDAR
function handleSolveClick() {
    const inputElement = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');

    const input = inputElement.value;
    const numbers = parseInput(input);

    if (numbers.length === 0) {
        resultElement.textContent = 'Por favor, insira números válidos.';
        return;
    }

    const mostFrequent = findMostFrequentNumber(numbers);
    resultElement.textContent = mostFrequent;
}

// Função para lidar com o clique no botão RETORNAR
function handleResetClick() {
    document.getElementById('numberInput').value = '';
    document.getElementById('result').textContent = '';
}

// Adiciona os event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('solveBtn').addEventListener('click', handleSolveClick);
    document.getElementById('resetBtn').addEventListener('click', handleResetClick);

    // Permite também usar Enter no input
    document.getElementById('numberInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSolveClick();
        }
    });
});