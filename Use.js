import { fetchData } from './modules/fetchData.js';
import { sortStrings } from './modules/sortStrings.js';
import { createDir, writeFile } from './fs/index.js';

const { data } = await fetchData(
  'https://jsonplaceholder.typicode.com/users'
);

const names = sortStrings(data.map(u => u.name));
const emails = data.map(u => u.email);

createDir('users');
writeFile('users/names.txt', names.join('\n'));
writeFile('users/emails.txt', emails.join('\n'));