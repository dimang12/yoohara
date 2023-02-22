const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi everyone!');
});

app.listen(5001, () => {
    console.log('Server started on port 5001');
});
