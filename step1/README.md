1. Run below command to create a package.json file (start point) (Don't forget to go to your desired directory using ls and cd commands):
```bash
npm init --y
```

2. Create an index.js -> This will be the main file.
3. Install express package (using below command) to be able to use it in the project:
```bash
npm i express
```

4. There is one more step to be able to use express, you need to import express package in index.js:
```javascript
const express = require('express');
```

5. Add below line in your index.js file to set up your app using express package:
```javascript
const app = express();
```

6. We need to specify a PORT number for our project(add below line in your index.js):
```javascript
const PORT = 5000;
```

7. Then you must add below line at the end of your index.js make your app listen on the specified port:
```javascript
module.exports = app.listen(PORT);
```

8. At the end type below command in the terminal to start the server on the specified port:
```bash
node index.js
```