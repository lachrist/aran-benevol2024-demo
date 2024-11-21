import { argv } from "node:process";
const birth = Number(argv[argv.length - 1]);
const age = 2024 - birth;
const day = 365 * age;
console.log(`You are ${day} days old.`);