1. mkdir myapp
2. cd myapp
3. npm init --> creates package.json file
4. initial entry point --> index.js
5. install express
6. end of package.json file includes dependencies:
{
  "name": "myapp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}

   "npm install express"
7. call require() to use Express library
8. touch index.js and try "Hello World" on port 8000.
9. test script at http://127.0.0.1:8000/
10. npm install eslint --save-dev
"scripts": {
  ...
  "lint": "eslint src/js"
  ...
}
11. 'eslint src/js' in terminal to run JS files in the src/js directory (shortcut for command is 'lint')
12. 'npm run-script lint' OR 'npm run lint'
13. npm install express-generator -g
14. create an Express app named "helloworld" with the default settings: 'express helloworld'
15. npx express-generator
16. npm install
17. DEBUG=myapp:* npm start
