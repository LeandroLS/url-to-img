const express = require('express');
const app = express();
const port = 3000;
const webshot = require('webshot');
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded());
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/post-image', (req, res) => {
    webshot(`${req.body.url}`, `./public/images/${req.body.url}.jpg`, function(err) {
        img = `${req.body.url}.jpg`;
        res.render('index', { img, err });
    });
});

app.get('/get-image', (req, res) => {
    res.download('./public/images/' + req.query.img);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));