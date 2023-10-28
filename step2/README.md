1. Last command in last step has one problem, once you need a change in your code, you need to restart your server (using ctrl c) to see the result of the updated code. To fix this, You can install nodemon package using below command, it automatically restarts server once you make a change in your code:
```bash
npm i nodemon
```

2. For using nodemon, change this line in package.json in scripts section "test": "echo \"Error: no test specified\" && exit 1" to: "dev": "nodemon index.js";

3. You can change this line: module.exports = app.listen(PORT); to below code so that you will see a message in console once server is started running: 
```javascript
module.exports = app.listen(PORT, () => {
    console.log(`Server is started running on port: `, PORT);
});
```

4. Checkout this repo. In routes folder, this is an example of a route (ignore verifyAccessToken, isAdmin, for now). At first we specify type of the request (post, put, get, delete etc) then we specify the endpoint (URL/post-ticket-answer) Then we pass a function (postTicketAnswerController.handlePostTicketAnswer) that should be triggered whenever a request is sent to this url:
```javascript
router.post('/post-ticket-answer', postTicketAnswerController.handlePostTicketAnswer);
```

5. Do not forget to add this line in your router files to be able to get access to routes:
```javascript
const router = require('express').Router();
```

6. In handlePostTicketAnswer (which is a handler function for a specific route), you have access to req and res. You also have access to next, which later on we will talk about
```javascript
    handlePostTicketAnswer = async (req, res, next) => {

    };
```


7.  This way you can get the data that is sent to your from client using req. And you can send data back and specify status code using res -> answer is sent in the body and you can get access to it through req.body and ticketId is sent in the query and you can get access to it through req.query
```javascript
    const { ticketId } = req.query;
    const { answer } = req.body;
```

8. Through res, you can specify status code (res.status(200)) and also you can send data in various formats like json (res.json('the is the data'))

```javascript
      return res.status(200).json({message: 'Answer is successfully attached'});
```