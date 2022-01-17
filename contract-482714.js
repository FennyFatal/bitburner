const solutions = [];
const [problem, goal] = ["478088485", -24];

const operators = ['','*','-','+'];

const operatorCount = problem.length - 1;

const formatResult = (perators, numbers) => perators.reduce((a, operator, index) => a + operator + numbers[index + 1], numbers[0]);

for (let i = 0; i < Math.pow(4, operatorCount); i++) {
    let perators = [];
    let counter = i;
    for (let j = 0; j < operatorCount; j++) {
        perators[j] = operators[counter % 4]
        counter = Math.round(counter / 4);
    }
    perators.reverse();
    const formatted = formatResult(perators, problem.split(''));
    if (eval(formatted) == goal) {
        solutions.push(formatted);
    };
}

console.log('[' + solutions.join(', ') + ']');