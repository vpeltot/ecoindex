const assert = require('assert');
const ecoindex = require('../src/index.js');

const ecoIndexA = ecoindex.computeEcoIndex(75, 47, 354.8);
const ecoIndexC = ecoindex.computeEcoIndex(583, 10, 769.5);
const ecoIndex3 = ecoindex.computeEcoIndex(594602, 3921, 223212.26);

describe('DOM 75, REQ 47, SIZE 354.8', () => {
    it('Ecoindex', () => {
        assert.equal(ecoIndexA, 82.79241215650895);
    });
    it('Grade', () => {
        assert.equal(ecoindex.getEcoIndexGrade(ecoIndexA), 'A');
    });
    it('Gas emissions', () => {
        assert.equal(ecoindex.computeGreenhouseGasesEmissionfromEcoIndex(ecoIndexA), 1.34);
    });
    it('Water consumption', () => {
        assert.equal(ecoindex.computeWaterConsumptionfromEcoIndex(ecoIndexA), 2.02);
    });
});

describe('DOM 583, REQ 10, SIZE 769.5', () => {
    it('Ecoindex', () => {
        assert.equal(ecoIndexC, 68.14166108202168);
    });
    it('Grade', () => {
        assert.equal(ecoindex.getEcoIndexGrade(ecoIndexC), 'C');
    });
    it('Gas emissions', () => {
        assert.equal(ecoindex.computeGreenhouseGasesEmissionfromEcoIndex(ecoIndexC), 1.64);
    });
    it('Water consumption', () => {
        assert.equal(ecoindex.computeWaterConsumptionfromEcoIndex(ecoIndexC), 2.46);
    });
});

describe('DOM 594602, REQ 3921, SIZE 223212.26', () => {
    it('Ecoindex', () => {
        assert.equal(ecoIndex3, 0);
    });
    it('Grade', () => {
        assert.equal(ecoindex.getEcoIndexGrade(ecoIndex3), 'G');
    });
    it('Gas emissions', () => {
        assert.equal(ecoindex.computeGreenhouseGasesEmissionfromEcoIndex(ecoIndex3), 3);
    });
    it('Water consumption', () => {
        assert.equal(ecoindex.computeWaterConsumptionfromEcoIndex(ecoIndex3), 4.5);
    });
});

describe('Grade', () => {
    it('A', () => {
        assert.equal(ecoindex.getEcoIndexGrade('81'), 'A');
    });
    it('B', () => {
        assert.equal(ecoindex.getEcoIndexGrade('71'), 'B');
    });
    it('C', () => {
        assert.equal(ecoindex.getEcoIndexGrade('57'), 'C');
    });
    it('D', () => {
        assert.equal(ecoindex.getEcoIndexGrade('43'), 'D');
    });
    it('E', () => {
        assert.equal(ecoindex.getEcoIndexGrade('29'), 'E');
    });
    it('F', () => {
        assert.equal(ecoindex.getEcoIndexGrade('12'), 'F');
    });
    it('G', () => {
        assert.equal(ecoindex.getEcoIndexGrade('6'), 'G');
    });
});