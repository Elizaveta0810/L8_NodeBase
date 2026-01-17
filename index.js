import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' });

console.log('--- Данные студента ---');
console.log(process.env.NAME);
console.log(process.env.SURNAME);
console.log(process.env.GROUP);
console.log(process.env.LIST_NUMBER);

console.log('--- Режим работы ---');
console.log(process.env.MODE);
