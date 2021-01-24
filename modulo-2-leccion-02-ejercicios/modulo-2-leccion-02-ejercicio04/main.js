'use strict';

const people = 9;
const bill = 128.0;
const anaExtra = 2.0;

const perPerson = ((bill - anaExtra) / people);

console.log("Money owed per person:" + perPerson);
console.log("but Ana owes:" + (perPerson + anaExtra));
