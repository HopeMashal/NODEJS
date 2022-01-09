- What is the difference between import and require?
  - require() can be called from anywhere inside the program whereas import() cannot be called conditionally, it always runs at the beginning of the file.

- How can you enable using the import syntax using node js
  - Add { "type": "module" } in the nearest package.json.

- Give 2 node.js environment variables that are not available when using the import syntax.
  - __dirname
  - __filename

- Create 3 functions using the export/import syntax.
  - import {Sum,Mult,Sub} from './ex3funs.js';

- Import the file system module using the import syntax.
  - import fs from 'fs';
