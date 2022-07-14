import {Sum,Mult,Sub} from './ex3funs.js';
import fs from 'fs';

fs.writeFileSync('hope.txt','Hello, I am Hope.')
const sum=Sum(2,2);
const mult=Mult(2,3);
const sub=Sub(5,2);
console.log(`The sum is equal: ${sum}, the mult is equal: ${mult}, the sub is equal: ${sub}`)
