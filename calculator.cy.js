describe('Calculator prototype test', () => { // TEST SUITE PAVADINIMAS
    it('Add 2+5=7', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(0)
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '7')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Add A+5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(0)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Subtract 22-10=12', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(0)
        cy.get('[data-testid="number1Field"]').type('22')
        cy.get('[data-testid="number2Field"]').type('10')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '12')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Add A-5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(0)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Multiply 10x5=50', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(0)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '50')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Add Ax5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(0)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Divide 10/5=2', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(0)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '2')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Add A/5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(0)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Concantenate 10 5=105', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(0)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '105')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Concantenate A 5= A5', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(0)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', 'A5')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
})



describe('Calculator VERSION 1', () => { // TEST SUITE PAVADINIMAS
    it('Add 2+5=7', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(1)
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '7')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A+5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(1)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Subtract 22-10=12', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(1)
        cy.get('[data-testid="number1Field"]').type('22')
        cy.get('[data-testid="number2Field"]').type('10')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '12')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A-5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(1)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Multiply 10x5=50', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(1)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '50')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Ax5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(1)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Divide 10/5=2', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(1)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '2')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A/5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(1)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Concantenate 10 5=105', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(1)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '105')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A 5=A5', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(1)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', 'A5')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
})

describe('Calculator VERSION 2', () => { // TEST SUITE PAVADINIMAS
    it('Add 2+5=7', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(2)
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '7')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A+5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(2)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Subtract 22-10=12', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(2)
        cy.get('[data-testid="number1Field"]').type('22')
        cy.get('[data-testid="number2Field"]').type('10')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '12')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A-5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(2)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Multiply 10x5=50', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(2)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '50')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Ax5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(2)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Divide 10/5=2', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(2)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '2')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A/5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(2)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Concantenate 10 5=105', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(2)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '105')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A 5=A5', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(2)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', 'A5')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
})
describe('Calculator VERSION 3', () => { // TEST SUITE PAVADINIMAS
    it('Add 2+5=7', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(3)
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '7')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A+5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(3)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Subtract 22-10=12', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(3)
        cy.get('[data-testid="number1Field"]').type('22')
        cy.get('[data-testid="number2Field"]').type('10')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '12')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A-5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(3)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Multiply 10x5=50', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(3)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '50')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Ax5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(3)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Divide 10/5=2', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(3)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '2')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A/5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(3)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Concantenate 10 5=105', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(3)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '105')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A 5= A5', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(3)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', 'A5')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
})
describe('Calculator VERSION 4', () => { // TEST SUITE PAVADINIMAS
    it('Add 2+5=7', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(4)
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '7')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A+5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(4)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Subtract 22-10=12', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(4)
        cy.get('[data-testid="number1Field"]').type('22')
        cy.get('[data-testid="number2Field"]').type('10')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '12')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A-5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(4)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Multiply 10x5=50', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(4)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '50')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Ax5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(4)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Divide 10/5=2', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(4)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '2')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A/5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(4)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Concantenate 10 5=105', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(4)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '105')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A 5= A5', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(4)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', 'A5')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
})
describe('Calculator VERSION 5', () => { // TEST SUITE PAVADINIMAS
    it('Add 2+5=7', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(5)
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '7')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A+5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(5)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Subtract 22-10=12', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(5)
        cy.get('[data-testid="number1Field"]').type('22')
        cy.get('[data-testid="number2Field"]').type('10')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '12')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A-5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(5)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Multiply 10x5=50', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(5)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '50')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Ax5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(5)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Divide 10/5=2', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(5)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '2')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A/5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(5)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Concantenate 10 5=105', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(5)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '105')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A 5=A5', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(5)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', 'A5')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
})
describe('Calculator VERSION 6', () => { // TEST SUITE PAVADINIMAS
    it('Add 2+5=7', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(6)
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '7')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A+5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(6)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Subtract 22-10=12', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(6)
        cy.get('[data-testid="number1Field"]').type('22')
        cy.get('[data-testid="number2Field"]').type('10')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '12')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A-5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(6)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Multiply 10x5=50', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(6)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '50')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Ax5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(6)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Divide 10/5=2', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(6)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '2')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A/5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(6)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Concantenate 10 5=105', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(6)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '105')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A 5= A5', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(6)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', 'A5')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
})
describe('Calculator VERSION 7', () => { // TEST SUITE PAVADINIMAS
    it('Add 2+5=7', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(7)
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '7')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A+5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(7)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Subtract 22-10=12', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(7)
        cy.get('[data-testid="number1Field"]').type('22')
        cy.get('[data-testid="number2Field"]').type('10')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '12')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A-5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(7)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Multiply 10x5=50', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(7)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '50')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Ax5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(7)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Divide 10/5=2', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(7)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '2')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A/5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(7)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Concantenate 10 5=105', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(7)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '105')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A 5= A5', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(7)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', 'A5')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
})
describe('Calculator VERSION 8', () => { // TEST SUITE PAVADINIMAS
    it('Add 2+5=7', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(8)
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '7')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A+5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(8)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Subtract 22-10=12', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(8)
        cy.get('[data-testid="number1Field"]').type('22')
        cy.get('[data-testid="number2Field"]').type('10')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '12')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A-5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(8)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Multiply 10x5=50', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(8)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '50')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Ax5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(8)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Divide 10/5=2', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(8)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '2')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A/5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(8)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Concantenate 10 5=105', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(8)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '105')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A 5= A5', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(8)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', 'A5')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
})
describe('Calculator VERSION 9', () => { // TEST SUITE PAVADINIMAS
    it('Add 2+5=7', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(9)
        cy.get('[data-testid="number1Field"]').type('2')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '7')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A+5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(9)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(0)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Subtract 22-10=12', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(9)
        cy.get('[data-testid="number1Field"]').type('22')
        cy.get('[data-testid="number2Field"]').type('10')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '12')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A-5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(9)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(1)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Multiply 10x5=50', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(9)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '50')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Ax5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(9)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(2)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Divide 10/5=2', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(9)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '2')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A/5=Number 1 is not a number', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(9)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(3)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="errorMsgField"]').should('be.visible')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('Concantenate 10 5=105', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(9)
        cy.get('[data-testid="number1Field"]').type('10')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', '105')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
    it('A 5= A5', () => { // IT - TEST CASE PAVADINIMAS
        cy.visit('https://testsheepnz.github.io/BasicCalculator')
        cy.get('[data-testid="selectBuild"]').select(9)
        cy.get('[data-testid="number1Field"]').type('A')
        cy.get('[data-testid="number2Field"]').type('5')
        cy.get('[data-testid="selectOperationDropdown"]').select(4)
        cy.get('[data-testid="calculateButton"]').click()
        cy.get('[data-testid="numberAnswerField"]').should('have.value', 'A5')
        //GET FIRST NUMBER IR TYPE
        //GET SECOND NUMBER IR TYPE
        //SELECT OPERATION 1 arba 'Subtract'
        //GET CALCULATE MYGTUKAS ir CLICK
        //GET ANSWER IR SHOULD HAVE VALUE
    })
})
