// hello world

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const index_path:string = "/home/cryhavoc21/winston_draft/views/index.hmtl";

var player_number:number = 0;

app.engine('.html', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');


app.get('/', (req, res) => {
  player_number += 1;
  res.render('index', {
    userNumber: player_number
  });
});

app.listen(port, () => {
  console.log(`Example application listening on port ${port}`);
});


