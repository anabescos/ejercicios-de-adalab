'use strict';

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const pinName = users.find((x) => x.pin === 5232);
console.log(pinName.name);

const pinIndex = users.findIndex((x) => x.pin === 5232);
console.log(pinIndex);
const deletedUser = users.splice(3, 1);
console.log(users);