import bcrypt from 'bcrypt';

const passwords = Array.from({ length: 13 }, (_, i) => `password${i}`);

for (const pass of passwords) {
  const start = Date.now();
  await bcrypt.hash(pass, 10);
  const end = Date.now();
  console.log(`${pass}: ${end - start} ms`);
}

console.log(
  'Время отличается из-за нагрузки CPU и очереди event loop'
);