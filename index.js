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
app.post('/get-image', (req, res) => {
    webshot(`${req.body.url}`, `./images/${req.body.url}.jpg`, function(err) {
        if(err){
            console.log(err);
        }
        // res.download(`${req.body.url}`);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));