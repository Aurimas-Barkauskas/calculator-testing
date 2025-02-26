const builds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const tests = [
    { description: 'Add 2+5=7', num1: '2', num2: '5', operation: 0, expected: '7' },
    { description: 'Add A+5=Number 1 is not a number', num1: 'A', num2: '5', operation: 0, expected: 'error', error: true },
    { description: 'Subtract 22-10=12', num1: '22', num2: '10', operation: 1, expected: '12' },
    { description: 'Add A-5=Number 1 is not a number', num1: 'A', num2: '5', operation: 1, expected: 'error', error: true },
    { description: 'Multiply 10x5=50', num1: '10', num2: '5', operation: 2, expected: '50' },
    { description: 'Add Ax5=Number 1 is not a number', num1: 'A', num2: '5', operation: 2, expected: 'error', error: true },
    { description: 'Divide 10/5=2', num1: '10', num2: '5', operation: 3, expected: '2' },
    { description: 'Add A/5=Number 1 is not a number', num1: 'A', num2: '5', operation: 3, expected: 'error', error: true },
    { description: 'Concatenate 10 5=105', num1: '10', num2: '5', operation: 4, expected: '105' },
    { description: 'Concatenate A 5= A5', num1: 'A', num2: '5', operation: 4, expected: 'A5' },
];

describe('Calculator prototype test', () => {
    builds.forEach((build) => {
        describe(`Build ${build}`, () => {
            tests.forEach(({ description, num1, num2, operation, expected, error }) => {
                it(description, () => {
                    cy.visit('https://testsheepnz.github.io/BasicCalculator');
                    cy.get('[data-testid="selectBuild"]').select(build);
                    cy.get('[data-testid="number1Field"]').type(num1);
                    cy.get('[data-testid="number2Field"]').type(num2);
                    cy.get('[data-testid="selectOperationDropdown"]').select(operation);
                    cy.get('[data-testid="calculateButton"]').click();
                    if (error) {
                        cy.get('[data-testid="errorMsgField"]').should('be.visible');
                    } else {
                        cy.get('[data-testid="numberAnswerField"]').should('have.value', expected);
                    }
                });
            });
        });
    });
});
