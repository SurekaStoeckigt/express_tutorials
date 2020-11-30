1. Navigate to project directory and run 'express express-locallibrary-tutorial --view=pug'
2. npx express-generator
3. npm install
4. DEBUG=tutorial2:* npm start
http://localhost:3000/
5. Enable server restart: npm install --save-dev nodemon
6. npm install -g nodemon
7.   "scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www",
    "serverstart": "DEBUG=tutorial2:* npm run devstart"
  },
8. DEBUG=tutorial2:* npm run devstart