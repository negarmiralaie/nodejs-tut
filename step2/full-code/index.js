const express = require('express');

const app = express();
const PORT = 5000;

module.exports = app.listen(PORT, () => {
    console.log(`Server is started running on port: `, PORT);
});