const express = require('express');
const app = express();
const port = 3000;
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/get-image', (req, res) => {
    res.send('vim aqui');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));